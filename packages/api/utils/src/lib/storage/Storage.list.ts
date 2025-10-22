import { ListObjectsCommand } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';
import { StorageClient } from './Storage';

type ListObjects = {
  prefix: string;
};

export const listObjects = async ({ prefix }: ListObjects) => {
  const command = new ListObjectsCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Prefix: prefix,
  });

  return await StorageClient.send(command);
};
