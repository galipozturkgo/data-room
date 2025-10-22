import { GetObjectCommand } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';

export type GetObject = {
  key: string;
};

export const getObject = ({ key }: GetObject) => {
  const command = new GetObjectCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Key: key,
  });

  return { command };
};
