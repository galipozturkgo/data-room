import { DeleteObjectCommand } from '@aws-sdk/client-s3';

import { getEnv } from '../envs/Envs';
import { StorageClient } from './Storage';

type DeleteObjectParams = {
  key: string;
};

export const deleteObject = async ({ key }: DeleteObjectParams) => {
  const command = new DeleteObjectCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Key: key,
  });

  await StorageClient.send(command);

  return true;
};
