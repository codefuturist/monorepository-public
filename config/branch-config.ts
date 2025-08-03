export interface BranchConfig {
  environment: 'production' | 'staging' | 'development' | 'preview';
  apiUrl: string;
  features: {
    newDashboard: boolean;
    betaFeatures: boolean;
    debugMode?: boolean;
    analytics?: boolean;
  };
  buildConfig: {
    minify: boolean;
    sourceMaps: boolean;
    optimization: 'production' | 'development';
    publicPath: string;
    analyzeBundle: boolean;
  };
}

export const getBranchConfig = (branchName: string): BranchConfig => {
  if (branchName === 'main') {
    return {
      environment: 'production',
      apiUrl: 'https://api.company.com',
      features: {
        newDashboard: true,
        betaFeatures: false,
        analytics: true,
      },
      buildConfig: {
        minify: true,
        sourceMaps: false,
        optimization: 'production',
        publicPath: 'https://cdn.company.com/',
        analyzeBundle: false,
      },
    };
  }

  if (branchName === 'develop') {
    return {
      environment: 'staging',
      apiUrl: 'https://staging-api.company.com',
      features: {
        newDashboard: true,
        betaFeatures: true,
        analytics: true,
      },
      buildConfig: {
        minify: true,
        sourceMaps: true,
        optimization: 'development',
        publicPath: 'https://staging-cdn.company.com/',
        analyzeBundle: true,
      },
    };
  }

  // Feature branch config
  return {
    environment: 'development',
    apiUrl: process.env.API_URL || 'http://localhost:3001',
    features: {
      newDashboard: true,
      betaFeatures: true,
      debugMode: true,
      analytics: false,
    },
    buildConfig: {
      minify: false,
      sourceMaps: true,
      optimization: 'development',
      publicPath: '/',
      analyzeBundle: true,
    },
  };
};

export const getCurrentBranch = (): string => {
  // In CI environment
  if (process.env.GITHUB_REF_NAME) {
    return process.env.GITHUB_REF_NAME;
  }
  
  // In local development
  if (process.env.NODE_ENV === 'development') {
    try {
      const { execSync } = require('child_process');
      return execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
    } catch {
      return 'develop';
    }
  }
  
  return 'develop';
};

export const currentConfig = getBranchConfig(getCurrentBranch());
