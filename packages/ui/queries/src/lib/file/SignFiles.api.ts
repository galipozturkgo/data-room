import { SignFileParams, SingedFile } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const signFiles = (builder: Builder) =>
  builder.mutation<SingedFile[], SignFileParams[]>({
    query: (body) => ({
      url: '/file/sign-multiple',
      method: 'POST',
      body,
    }),
  });
