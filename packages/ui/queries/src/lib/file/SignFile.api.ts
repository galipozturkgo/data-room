import { SignFileParams, SingedFile } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const signFile = (builder: Builder) =>
  builder.mutation<SingedFile, SignFileParams>({
    query: (body) => ({
      url: '/file/sign',
      method: 'POST',
      body,
    }),
  });
