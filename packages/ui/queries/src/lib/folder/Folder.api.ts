import { Folder, FolderParams } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const folder = (builder: Builder) =>
  builder.query<Folder[], FolderParams>({
    query: (params) => ({
      url: '/folder/folder',
      params,
    }),
    providesTags: ['Folder'],
  });
