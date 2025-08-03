export const stagingConfig = {
  environment: 'staging' as const,
  api: {
    baseUrl: 'https://staging-api.company.com',
    timeout: 30000,
    retries: 2,
  },
  database: {
    url: process.env.STAGING_DATABASE_URL,
    ssl: true,
    poolSize: 10,
  },
  cache: {
    redis: {
      url: process.env.STAGING_REDIS_URL,
      ttl: 1800,
    },
  },
  features: {
    analytics: true,
    monitoring: true,
    debugMode: true,
    experimentalFeatures: true,
  },
  security: {
    cors: {
      origin: ['https://staging.company.com', 'http://localhost:3000'],
      credentials: true,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 1000, // More lenient for testing
    },
  },
  logging: {
    level: 'debug',
    format: 'pretty',
    destinations: ['console', 'file'],
  },
};
