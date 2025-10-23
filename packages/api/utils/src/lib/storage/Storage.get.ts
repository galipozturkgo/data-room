import { GetObjectCommand } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';

export type GetObjectParams = {
  key: string;
};

export const getObject = ({ key }: GetObjectParams) => {
  const command = new GetObjectCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Key: key,
  });

  return { command };
};
