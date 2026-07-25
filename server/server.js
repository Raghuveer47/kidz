const app = require('./src/app');
const database = require('./src/config/db');
const env = require('./src/config/env');

async function start() {
  try {
    await database.connect();
    app.listen(env.PORT, () => {
      console.log(`Kids Coding AI API listening on port ${env.PORT}`);
      console.log(`Auth endpoints: http://localhost:${env.PORT}/api/auth`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

start();
