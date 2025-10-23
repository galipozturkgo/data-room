import { UpdateFolder } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const updateFolder = (builder: Builder) =>
  builder.mutation<void, UpdateFolder>({
    query: (body) => ({
      url: `/folder/update`,
      method: 'PUT',
      body,
    }),
    invalidatesTags: (res, err, { id }) =>
      (!err && ['Folder', { type: 'Folder', id }]) || [],
  });
