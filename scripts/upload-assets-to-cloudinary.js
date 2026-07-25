/**
 * Upload client/src/assets images to Cloudinary and rewrite JS/JSX imports to URLs.
 *
 * Usage (from repo root):
 *   node scripts/upload-assets-to-cloudinary.js
 *
 * Env (loads Career Master .env if kids .env lacks keys):
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'client/src/assets');
const SRC_DIR = path.join(ROOT, 'client/src');
const MAP_PATH = path.join(ROOT, 'scripts/cloudinary-asset-map.json');
const FOLDER_PREFIX = 'kidscodingai/assets';
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']);
const CONCURRENCY = 4;

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(ROOT, 'server/.env'));
loadEnvFile(path.join(ROOT, '../career-master.ai/backend/.env'));

function resolveCloudinary() {
  const candidates = [
    path.join(ROOT, 'server/node_modules/cloudinary'),
    path.join(ROOT, 'node_modules/cloudinary'),
    path.join(ROOT, '../career-master.ai/backend/node_modules/cloudinary'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return require(c).v2;
  }
  throw new Error('cloudinary package not found. Install it in server/: npm i cloudinary');
}

const cloudinary = resolveCloudinary();

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Missing CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET');
  process.exit(1);
}

cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });

function walkImages(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkImages(full));
    else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      if (entry.name === 'react.svg') continue;
      out.push(full);
    }
  }
  return out;
}

function relFromAssets(absPath) {
  return path.relative(ASSETS_DIR, absPath).split(path.sep).join('/');
}

function toPublicId(relPath) {
  const withoutExt = relPath.replace(/\.[^.]+$/, '');
  return `${FOLDER_PREFIX}/${withoutExt}`
    .replace(/\\/g, '/')
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/[^a-zA-Z0-9/_-]/g, '-');
}

async function uploadOne(absPath, existingMap) {
  const rel = relFromAssets(absPath);
  if (existingMap[rel]?.url) {
    return { rel, ...existingMap[rel], skipped: true };
  }
  const publicId = toPublicId(rel);
  const result = await cloudinary.uploader.upload(absPath, {
    public_id: publicId,
    overwrite: true,
    resource_type: 'image',
    unique_filename: false,
    invalidate: true,
  });
  return {
    rel,
    url: result.secure_url,
    publicId: result.public_id,
    bytes: result.bytes,
    format: result.format,
    skipped: false,
  };
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

function walkSrcFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'assets') continue;
      out.push(...walkSrcFiles(full));
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function rewriteImports(filePath, urlByRel) {
  let source = fs.readFileSync(filePath, 'utf8');
  const importRe =
    /import\s+(\w+)\s+from\s+(['"])([^'"]*\/assets\/)([^'"]+)\2;?/g;
  let changed = 0;
  const next = source.replace(importRe, (full, name, _q, _prefix, assetTail) => {
    // assetTail like "images/class1/..."
    const rel = assetTail.replace(/^images\//, 'images/');
    // Imports are always .../assets/<rel> where rel starts with images/
    const key = assetTail.startsWith('images/') ? assetTail : `images/${assetTail}`;
    const entry = urlByRel[key];
    if (!entry?.url) {
      console.warn(`  No Cloudinary URL for import in ${path.relative(ROOT, filePath)}: ${key}`);
      return full;
    }
    changed += 1;
    return `const ${name} = '${entry.url}';`;
  });
  if (changed > 0) {
    fs.writeFileSync(filePath, next, 'utf8');
  }
  return changed;
}

async function main() {
  const existingMap = fs.existsSync(MAP_PATH)
    ? JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'))
    : {};

  const files = walkImages(ASSETS_DIR);
  console.log(`Found ${files.length} images under client/src/assets`);
  console.log(`Uploading to Cloudinary folder: ${FOLDER_PREFIX}/…`);

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  const urlByRel = { ...existingMap };

  const results = await mapPool(files, CONCURRENCY, async (abs, idx) => {
    const rel = relFromAssets(abs);
    try {
      const r = await uploadOne(abs, urlByRel);
      urlByRel[rel] = { url: r.url, publicId: r.publicId, bytes: r.bytes, format: r.format };
      if (r.skipped) {
        skipped += 1;
        if ((idx + 1) % 25 === 0) console.log(`  progress ${idx + 1}/${files.length} (resume skip)`);
      } else {
        uploaded += 1;
        console.log(`  [${uploaded + skipped}/${files.length}] ${rel}`);
      }
      // Persist often so interrupted runs can resume
      if ((uploaded + skipped) % 10 === 0) {
        fs.writeFileSync(MAP_PATH, JSON.stringify(urlByRel, null, 2));
      }
      return r;
    } catch (err) {
      failed += 1;
      console.error(`  FAILED ${rel}: ${err.message}`);
      return { rel, error: err.message };
    }
  });

  fs.writeFileSync(MAP_PATH, JSON.stringify(urlByRel, null, 2));
  console.log(`\nUpload done. uploaded=${uploaded} skipped=${skipped} failed=${failed}`);
  console.log(`Map saved: ${MAP_PATH}`);

  // Also write a JS module for the client (optional lookup)
  const jsMapPath = path.join(ASSETS_DIR, 'cloudinaryUrls.js');
  const entries = Object.entries(urlByRel)
    .filter(([, v]) => v?.url)
    .sort(([a], [b]) => a.localeCompare(b));
  const jsBody =
    '/** Auto-generated by scripts/upload-assets-to-cloudinary.js — do not edit by hand */\n' +
    'export const cloudinaryUrls = {\n' +
    entries.map(([rel, v]) => `  ${JSON.stringify(rel)}: ${JSON.stringify(v.url)},`).join('\n') +
    '\n};\n\nexport default cloudinaryUrls;\n';
  fs.writeFileSync(jsMapPath, jsBody, 'utf8');
  console.log(`Client map: ${jsMapPath}`);

  console.log('\nRewriting imports in client/src…');
  const srcFiles = [
    ...walkSrcFiles(SRC_DIR),
    path.join(ASSETS_DIR, 'cloudinaryUrls.js'),
  ].filter((f, i, arr) => fs.existsSync(f) && arr.indexOf(f) === i);

  let importReplacements = 0;
  let filesTouched = 0;
  for (const f of srcFiles) {
    if (path.basename(f) === 'cloudinaryUrls.js') continue;
    const n = rewriteImports(f, urlByRel);
    if (n > 0) {
      filesTouched += 1;
      importReplacements += n;
      console.log(`  ${path.relative(ROOT, f)}: ${n} imports → URLs`);
    }
  }
  console.log(`\nRewrite done. files=${filesTouched} imports=${importReplacements}`);

  // Replace any existing Cloudinary URLs (e.g. old cloud name) with the new map URLs
  console.log('\nReplacing existing Cloudinary URLs with new cloud…');
  const byPublicSuffix = new Map();
  for (const [rel, meta] of Object.entries(urlByRel)) {
    if (!meta?.url) continue;
    // images/foo/bar.png → kidscodingai/assets/images/foo/bar
    const publicId = toPublicId(rel);
    byPublicSuffix.set(publicId, meta.url);
    // also key without folder prefix for flexible matching
    byPublicSuffix.set(rel.replace(/\.[^.]+$/, ''), meta.url);
  }

  const cloudUrlRe =
    /https:\/\/res\.cloudinary\.com\/[^/\s'"]+\/image\/upload\/(?:[^/\s'"]+\/)*(kidscodingai\/assets\/[^\s'"?]+)/g;

  let urlFiles = 0;
  let urlHits = 0;
  for (const f of srcFiles) {
    if (path.basename(f) === 'cloudinaryUrls.js') continue;
    let src = fs.readFileSync(f, 'utf8');
    let hits = 0;
    const next = src.replace(cloudUrlRe, (full, publicPath) => {
      // publicPath may include extension and may have been sanitized (spaces→-)
      const noExt = publicPath.replace(/\.[a-zA-Z0-9]+$/, '');
      const candidates = [noExt, publicPath, noExt.replace(/\/+/g, '/')];
      for (const c of candidates) {
        if (byPublicSuffix.has(c)) {
          hits += 1;
          return byPublicSuffix.get(c);
        }
      }
      // try matching against map by stripping kidscodingai/assets/
      const relGuess = noExt.replace(/^kidscodingai\/assets\//, '');
      for (const [rel, meta] of Object.entries(urlByRel)) {
        if (!meta?.url) continue;
        const relNoExt = rel.replace(/\.[^.]+$/, '');
        if (
          relNoExt === relGuess ||
          toPublicId(rel) === noExt ||
          toPublicId(rel) === publicPath.replace(/\.[a-zA-Z0-9]+$/, '')
        ) {
          hits += 1;
          return meta.url;
        }
      }
      console.warn(`  unmatched Cloudinary URL in ${path.relative(ROOT, f)}: ${full}`);
      return full;
    });
    // Also fix hardcoded cloud name helpers like `res.cloudinary.com/OLD/...`
    const hardNext = next.replace(
      /https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/kidscodingai\/assets\//g,
      `https://res.cloudinary.com/${cloudName}/image/upload/kidscodingai/assets/`
    );
    if (hardNext !== src || hits > 0) {
      fs.writeFileSync(f, hardNext, 'utf8');
      if (hits > 0 || hardNext !== next) {
        urlFiles += 1;
        urlHits += hits;
        console.log(`  ${path.relative(ROOT, f)}: updated Cloudinary URLs`);
      }
    }
  }
  console.log(`URL replace done. files=${urlFiles} matched=${urlHits}`);

  const stillLocal = [];
  for (const f of srcFiles) {
    if (path.basename(f) === 'cloudinaryUrls.js') continue;
    const src = fs.readFileSync(f, 'utf8');
    const re = /from\s+(['"])([^'"]*\/assets\/[^'"]+)\1/g;
    let m;
    while ((m = re.exec(src))) {
      if (m[2].includes('cloudinaryUrls')) continue;
      stillLocal.push(`${path.relative(ROOT, f)} → ${m[2]}`);
    }
  }
  if (stillLocal.length) {
    console.log('\nRemaining local asset imports:');
    stillLocal.forEach((l) => console.log(' ', l));
  } else {
    console.log('\nNo remaining local /assets/ image imports.');
  }

  const stillOldCloud = [];
  for (const f of srcFiles) {
    const src = fs.readFileSync(f, 'utf8');
    if (/res\.cloudinary\.com\/(?!dy9zlgjh6)[a-z0-9]+/i.test(src)) {
      stillOldCloud.push(path.relative(ROOT, f));
    }
  }
  if (stillOldCloud.length) {
    console.log('\nFiles still referencing another Cloudinary cloud:');
    stillOldCloud.forEach((l) => console.log(' ', l));
  }

  const failCount = results.filter((r) => r?.error).length;
  if (failCount) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
