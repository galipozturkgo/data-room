const isServer = typeof window === 'undefined';

export const setLocalStorage = <T extends string>(key: string, value: T) => {
  !isServer && localStorage.setItem(key, value);
};

export const getLocalStorage = <T extends string>(key: string): T => {
  return (!isServer && (localStorage.getItem(key) as T)) as T;
};

export const removeLocalStorage = (key: string) => {
  !isServer && localStorage.removeItem(key);
};
