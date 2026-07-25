const mongoose = require('mongoose');
const env = require('./env');

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (!env.MONGODB_URI || !env.MONGODB_URI.startsWith('mongodb')) {
      throw new Error('Invalid MONGODB_URI / MONGO_URI');
    }

    const isDev = env.NODE_ENV !== 'production';
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: isDev ? 10000 : 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: isDev ? 10000 : 30000
    };

    const masked = env.MONGODB_URI.replace(/:[^:@]+@/, ':****@');
    console.log('Connecting to MongoDB...', masked);

    this.connection = await mongoose.connect(env.MONGODB_URI, options);
    console.log(`MongoDB connected: ${this.connection.connection.host}`);

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err.message);
    });

    return this.connection;
  }

  async disconnect() {
    if (this.connection) {
      await mongoose.disconnect();
      console.log('MongoDB disconnected');
    }
  }

  isConnected() {
    return mongoose.connection.readyState === 1;
  }
}

module.exports = new Database();
