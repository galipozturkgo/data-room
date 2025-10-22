import { Builder } from '../base/query/Api';

export const logout = (builder: Builder) =>
  builder.mutation<void, void>({
    query: () => ({
      url: '/auth/logout',
      method: 'POST',
    }),
  });
