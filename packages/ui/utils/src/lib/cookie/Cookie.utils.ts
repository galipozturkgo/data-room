import Cookies from 'js-cookie';

export const setCookie = <T extends string>(
  key: string,
  value: string | T,
  opts?: Cookies.CookieAttributes
) => {
  Cookies.set(key, value, opts);
};

export const getCookie = <T>(key: string) => {
  return Cookies.get(key) as T;
};

export const removeCookie = (
  key: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.remove(key, options);
};
