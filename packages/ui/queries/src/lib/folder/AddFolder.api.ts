import { AddFolder } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const addFolder = (builder: Builder) =>
  builder.mutation<void, AddFolder>({
    query: (body) => ({
      url: '/folder/add',
      method: 'POST',
      body,
    }),
    invalidatesTags: (res, err) => (!err && ['Folders']) || [],
  });
