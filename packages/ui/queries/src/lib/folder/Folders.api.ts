import { Folder, FoldersParams } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const folders = (builder: Builder) =>
  builder.query<Folder[], FoldersParams>({
    query: (params) => ({
      url: '/folder/folders',
      params,
    }),
    providesTags: ['Folders'],
  });
