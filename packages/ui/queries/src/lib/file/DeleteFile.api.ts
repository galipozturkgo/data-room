import { DeleteFile } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const deleteFile = (builder: Builder) =>
  builder.mutation<void, DeleteFile>({
    query: (body) => ({
      url: '/file/delete',
      method: 'DELETE',
      body,
    }),
  });
