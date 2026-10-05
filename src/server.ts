import app from './app.js';
import { env } from './config/env.js';
import http, { Server } from 'http';

const server:Server = http.createServer(app);

const startServer = async () => {
  try {
    server.listen(env.PORT, () => {
      console.log(`🚀 Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection detected, shutting down...');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception detected, shutting down...', err);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  if (server) {
    server.close(() => {
      console.log('Process terminated.');
      process.exit(0);
    });
  }
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  if (server) {
    server.close(() => {
      console.log('Process terminated.');
      process.exit(0);
    });
  }
});
