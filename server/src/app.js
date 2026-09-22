const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const authRoutes = require('./auth/auth.routes');
const adminRoutes = require('./admin/admin.routes');
const usersRoutes = require('./user/users.routes');
const curriculumRoutes = require('./curriculum/curriculum.routes');
const quizRoutes = require('./quiz/quiz.routes');
const uploadRoutes = require('./upload/upload.routes');
const batchesRoutes = require('./batches/batches.routes');
const reportsRoutes = require('./reports/reports.routes');
const progressRoutes = require('./progress/progress.routes');
const homeRoutes = require('./home/home.routes');
const env = require('./config/env');

const app = express();

app.set('trust proxy', 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = (env.CORS_ORIGIN || '')
  .split(',')
  .map((o) => o.trim().replace(/\/$/, ''))
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      const normalized = origin.replace(/\/$/, '');
      if (
        allowedOrigins.length === 0 ||
        allowedOrigins.includes('*') ||
        allowedOrigins.includes(normalized)
      ) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
  })
);

app.use(
  '/api/',
  rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.NODE_ENV === 'development' ? 1000 : env.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, error: { message: 'Too many requests, please try again later.' } }
  })
);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Kids Coding AI API is running',
    auth: '/api/auth',
    users: '/api/users',
    curriculum: '/api/curriculum',
    quizzes: '/api/quizzes',
    upload: '/api/upload',
    batches: '/api/batches',
    reports: '/api/reports',
    progress: '/api/progress',
    home: '/api/home',
    admin: '/api/admin'
  });
});

app.get('/health', (req, res) => {
  res.json({ success: true, status: 'ok', timestamp: new Date().toISOString() });
});

// Auth (Career Master–style module)
app.use('/api/auth', authRoutes);

// Admin shell
app.use('/api/admin', adminRoutes);

// Users CRUD (admin-only, Career Master pattern)
app.use('/api/users', usersRoutes);

// Curriculum outline CMS (replaces legacy flat routes)
app.use('/api/curriculum', curriculumRoutes);

// Quizzes + attempts (Career Master–style, kids MCQ)
app.use('/api/quizzes', quizRoutes);

// Cloudinary image upload (admin)
app.use('/api/upload', uploadRoutes);

// Batches / summer groups (admin)
app.use('/api/batches', batchesRoutes);

// Quiz attempt reports (admin)
app.use('/api/reports', reportsRoutes);

// Topic / quiz progress (admin)
app.use('/api/progress', progressRoutes);

// Home CMS (public GET + admin write)
app.use('/api/home', homeRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
