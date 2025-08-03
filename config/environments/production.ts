export const productionConfig = {
  environment: 'production' as const,
  api: {
    baseUrl: 'https://api.company.com',
    timeout: 30000,
    retries: 3,
  },
  database: {
    url: process.env.DATABASE_URL,
    ssl: true,
    poolSize: 20,
  },
  cache: {
    redis: {
      url: process.env.REDIS_URL,
      ttl: 3600,
    },
  },
  features: {
    analytics: true,
    monitoring: true,
    debugMode: false,
    experimentalFeatures: false,
  },
  security: {
    cors: {
      origin: ['https://app.company.com'],
      credentials: true,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
  },
  logging: {
    level: 'info',
    format: 'json',
    destinations: ['console', 'file', 'cloudwatch'],
  },
};
