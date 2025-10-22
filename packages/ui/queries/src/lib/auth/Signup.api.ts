import { CurrentUser, Signup } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const signup = (builder: Builder) =>
  builder.mutation<CurrentUser, Signup>({
    query: (body) => ({
      url: '/auth/signup-local',
      method: 'POST',
      body,
    }),
  });
