import { APP_ENVS, AppEnvironments } from './App.envs';

type EnvKey = keyof AppEnvironments;

type EnvValue<K extends EnvKey> = AppEnvironments[K];

export const getEnv = <K extends EnvKey>(key: K): EnvValue<K> => {
  return (APP_ENVS as Record<EnvKey, unknown>)[key] as EnvValue<K>;
};
