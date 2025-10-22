import { GetFile, GetFileParams } from '@dataroom/shared-types';

import { Builder } from '../base/query/Api';

export const getFile = (builder: Builder) =>
  builder.query<GetFile, GetFileParams>({
    async queryFn(params, api, extraOptions, baseQuery) {
      if (!params.key) {
        return { data: { url: '' } };
      }

      const result = await baseQuery({
        url: '/file/get',
        params,
      });

      if (result.error) {
        return { error: result.error };
      }

      return { data: result.data as GetFile };
    },
  });
