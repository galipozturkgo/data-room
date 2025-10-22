import { CurrentUser, Login } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const login = (builder: Builder) =>
  builder.mutation<CurrentUser, Login>({
    query: (body) => ({
      url: '/auth/login-local',
      method: 'POST',
      body,
    }),
  });
