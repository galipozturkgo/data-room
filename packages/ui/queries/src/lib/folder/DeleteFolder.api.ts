import { DeleteFolderParams } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const deleteFolder = (builder: Builder) =>
  builder.mutation<void, DeleteFolderParams>({
    query: ({ id }) => ({
      url: `/folder/delete/${id}`,
      method: 'DELETE',
    }),
    invalidatesTags: (res, err) => (!err && ['Folders']) || [],
  });
