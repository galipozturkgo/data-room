import { AddFiles } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const addFiles = (builder: Builder) =>
  builder.mutation<void, AddFiles>({
    query: (body) => ({
      url: '/file/add',
      method: 'POST',
      body,
    }),
    invalidatesTags: (res, err) => (!err && ['File']) || [],
  });
