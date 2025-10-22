import { S3Client } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';

const ENDPOINT = getEnv('S3_ENDPOINT_URL');

const REGION = getEnv('S3_BUCKET_REGION');

const ACCESS_KEY_ID = getEnv('S3_ACCESS_KEY');

const SECRET_ACCESS_KEY = getEnv('S3_SECRET_KEY');

export const StorageClient = new S3Client({
  region: REGION,
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});
