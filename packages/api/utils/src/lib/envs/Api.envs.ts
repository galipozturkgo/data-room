export type ApiEnvironments = {
  APP: string;
  PROD: boolean;
  HOST: string;
  PORT: number;
  CORS: string;
  DOMAIN: string;
  APP_URL: string;
  MONGO_URL: string;
  JWT_SECRET_KEY: string;
  COOKIE_SECRET_KEY: string;
  S3_ENDPOINT_URL: string;
  S3_ACCESS_KEY: string;
  S3_SECRET_KEY: string;
  S3_BUCKET_REGION: string;
  S3_BUCKET_NAME: string;
};

const getEnv = (key: string): string => process.env[key] as string;

class ApiEnvironment {
  constructor() {
    if (getEnv('APP') === 'api') {
      if (!getEnv('CORS')) {
        throw new Error('CORS required');
      }

      if (!getEnv('DOMAIN')) {
        throw new Error('DOMAIN required');
      }

      if (!getEnv('APP_URL')) {
        throw new Error('APP_URL required');
      }

      if (!getEnv('MONGO_URL')) {
        throw new Error('MONGO_URL required');
      }

      if (!getEnv('JWT_SECRET_KEY')) {
        throw new Error('JWT_SECRET_KEY required');
      }

      if (!getEnv('COOKIE_SECRET_KEY')) {
        throw new Error('COOKIE_SECRET_KEY required');
      }

      if (!getEnv('S3_ENDPOINT_URL')) {
        throw new Error('S3_ENDPOINT_URL required');
      }

      if (!getEnv('S3_ACCESS_KEY')) {
        throw new Error('S3_ACCESS_KEY required');
      }

      if (!getEnv('S3_SECRET_KEY')) {
        throw new Error('S3_SECRET_KEY required');
      }

      if (!getEnv('S3_BUCKET_REGION')) {
        throw new Error('S3_BUCKET_REGION required');
      }

      if (!getEnv('S3_BUCKET_NAME')) {
        throw new Error('S3_BUCKET_NAME required');
      }
    }
  }

  get APP() {
    return getEnv('APP');
  }

  get PROD() {
    return getEnv('PROD') === 'true';
  }

  get HOST() {
    return getEnv('HOST');
  }

  get PORT() {
    return Number(getEnv('PORT'));
  }

  get CORS() {
    return getEnv('CORS');
  }

  get DOMAIN() {
    return getEnv('DOMAIN');
  }

  get APP_URL() {
    return getEnv('APP_URL');
  }

  get MONGO_URL() {
    return getEnv('MONGO_URL');
  }

  get JWT_SECRET_KEY() {
    return getEnv('JWT_SECRET_KEY');
  }

  get COOKIE_SECRET_KEY() {
    return getEnv('COOKIE_SECRET_KEY');
  }

  get GOOGLE_RECAPTCHA_SECRET_KEY() {
    return getEnv('GOOGLE_RECAPTCHA_SECRET_KEY');
  }

  get GOOGLE_CLIENT_ID() {
    return getEnv('GOOGLE_CLIENT_ID');
  }

  get GOOGLE_CLIENT_SECRET() {
    return getEnv('GOOGLE_CLIENT_SECRET');
  }

  get S3_ENDPOINT_URL() {
    return getEnv('S3_ENDPOINT_URL');
  }

  get S3_ACCESS_KEY() {
    return getEnv('S3_ACCESS_KEY');
  }

  get S3_SECRET_KEY() {
    return getEnv('S3_SECRET_KEY');
  }

  get S3_BUCKET_REGION() {
    return getEnv('S3_BUCKET_REGION');
  }

  get S3_BUCKET_NAME() {
    return getEnv('S3_BUCKET_NAME');
  }
}

let API_ENVS: ApiEnvironments;

if (getEnv('APP') === 'api') {
  API_ENVS = new ApiEnvironment();
}

export { API_ENVS };
