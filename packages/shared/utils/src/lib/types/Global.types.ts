declare global {
  type Extend<T, U extends T> = U;

  type RequireOne<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

  type AtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];

  type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

  type OmitKeys<T, K extends PropertyKey> = {
    [P in keyof T as Exclude<P, K>]: T[P];
  };
}

export {};
