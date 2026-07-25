/**
 * Seed the first Kids Coding super_admin.
 *
 * Usage:
 *   node scripts/seed-admin.js
 *
 * Optional env:
 *   ADMIN_EMAIL=admin@kidscodingai.com
 *   ADMIN_PASSWORD=Admin@12345
 *   ADMIN_NAME=Kids Admin
 */
require('dotenv').config();
const database = require('../src/config/db');
const env = require('../src/config/env');
const User = require('../src/user/users.model');
const CryptoUtil = require('../src/utils/crypto');

async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || 'admin@kidscodingai.com').toLowerCase().trim();
  const password = process.env.ADMIN_PASSWORD || 'Admin@12345';
  const name = process.env.ADMIN_NAME || 'Kids Admin';

  await database.connect();

  let user = await User.findOne({ email }).select('+passwordHash');

  if (user) {
    const passwordHash = await CryptoUtil.hashPassword(password);
    user.name = name;
    user.passwordHash = passwordHash;
    user.roles = ['super_admin'];
    user.status = 'active';
    if (!user.verification) user.verification = {};
    user.verification.emailVerified = true;
    await user.save();
    console.log(`Updated existing admin: ${email}`);
  } else {
    const passwordHash = await CryptoUtil.hashPassword(password);
    user = await User.create({
      name,
      email,
      passwordHash,
      roles: ['super_admin'],
      status: 'active',
      verification: { emailVerified: true }
    });
    console.log(`Created admin: ${email}`);
  }

  console.log('---');
  console.log('Admin login ready');
  console.log(`  Email:    ${email}`);
  console.log(`  Password: ${password}`);
  console.log(`  Role:     ${user.roles.join(', ')}`);
  console.log(`  Open:     http://localhost:5173/admin`);
  console.log('---');
  console.log(`Mongo: ${env.MONGODB_URI.replace(/:[^:@]+@/, ':****@')}`);

  await database.disconnect();
  process.exit(0);
}

seedAdmin().catch(async (err) => {
  console.error('Seed failed:', err.message);
  try {
    await database.disconnect();
  } catch {
    // ignore
  }
  process.exit(1);
});
