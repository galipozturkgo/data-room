import { File, FilesParams } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const files = (builder: Builder) =>
  builder.query<File[], FilesParams>({
    query: (params) => ({
      url: '/file/files',
      params,
    }),
    providesTags: ['File'],
  });
