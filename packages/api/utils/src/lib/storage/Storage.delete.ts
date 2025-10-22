import { DeleteObjectCommand } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';
import { StorageClient } from './Storage';

type DeleteObject = {
  key: string;
};

export const deleteObject = async ({ key }: DeleteObject) => {
  const command = new DeleteObjectCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Key: key,
  });

  await StorageClient.send(command);

  return true;
};
