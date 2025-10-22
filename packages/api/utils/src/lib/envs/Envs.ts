import { API_ENVS, ApiEnvironments } from './Api.envs';

type EnvKey = keyof ApiEnvironments;

type EnvValue<K extends EnvKey> = ApiEnvironments[K];

export const getEnv = <K extends EnvKey>(key: K): EnvValue<K> => {
  return (API_ENVS as Record<EnvKey, unknown>)[key] as EnvValue<K>;
};
