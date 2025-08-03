export const developmentConfig = {
  environment: 'development' as const,
  api: {
    baseUrl: 'http://localhost:3001',
    timeout: 10000,
    retries: 1,
  },
  database: {
    url: process.env.DEV_DATABASE_URL || 'postgresql://localhost:5432/monorepo_dev',
    ssl: false,
    poolSize: 5,
  },
  cache: {
    redis: {
      url: process.env.DEV_REDIS_URL || 'redis://localhost:6379',
      ttl: 300,
    },
  },
  features: {
    analytics: false,
    monitoring: true,
    debugMode: true,
    experimentalFeatures: true,
  },
  security: {
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:3002'],
      credentials: true,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 10000, // Very lenient for development
    },
  },
  logging: {
    level: 'debug',
    format: 'pretty',
    destinations: ['console'],
  },
};
