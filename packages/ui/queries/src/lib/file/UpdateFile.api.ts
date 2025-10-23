import { UpdateFile } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const updateFile = (builder: Builder) =>
  builder.mutation<void, UpdateFile>({
    query: (body) => ({
      url: `/file/update`,
      method: 'PUT',
      body,
    }),
    invalidatesTags: (res, err, { id }) =>
      (!err && ['File', { type: 'File', id }]) || [],
  });
