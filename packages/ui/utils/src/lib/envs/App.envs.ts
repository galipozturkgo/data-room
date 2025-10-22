/// <reference types="vite/client" />

export type AppEnvironments = {
  APP: string;
  PROD: boolean;
  API_URL: string;
};

const getEnv = (key: string): string => import.meta.env[key] as string;

class AppEnvironemnt {
  constructor() {
    if (getEnv('VITE_APP') === 'app') {
      if (!getEnv('VITE_APP')) {
        throw new Error('VITE_APP required');
      }

      if (!getEnv('VITE_API_URL')) {
        throw new Error('VITE_API_URL required');
      }
    }
  }

  get APP() {
    return getEnv('VITE_APP');
  }

  get PROD() {
    return getEnv('PROD') === 'true';
  }

  get API_URL() {
    return getEnv('VITE_API_URL');
  }
}

let APP_ENVS: AppEnvironments;

if (getEnv('VITE_APP') === 'app') {
  APP_ENVS = new AppEnvironemnt();
}

export { APP_ENVS };
