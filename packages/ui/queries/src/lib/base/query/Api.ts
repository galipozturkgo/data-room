import { ServerError } from '@dataroom/shared-types';
import { getEnv } from '@dataroom/ui-utils';
import type {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: getEnv('API_URL'),
  credentials: 'include',
  responseHandler: 'content-type',
}) as BaseQueryFn<string | FetchArgs, unknown, ServerError, unknown>;

const TagTypes = ['Folder', 'File'] as const;

export type TagType = (typeof TagTypes)[number];

export const baseApi = createApi({
  baseQuery: rawBaseQuery,
  reducerPath: 'baseApi',
  tagTypes: TagTypes,
  endpoints: () => ({}),
});

export type Builder = EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, ServerError, unknown>,
  TagType,
  'baseApi'
>;
