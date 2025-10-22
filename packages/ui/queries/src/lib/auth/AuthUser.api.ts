import { CurrentUser } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const authUser = (builder: Builder) =>
  builder.query<CurrentUser, void>({
    query: () => '/auth/user',
    providesTags: ['AuthUser'],
  });
