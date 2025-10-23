import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { StorageClient } from './Storage';

type SignUrlParams = {
  command: PutObjectCommand;
  expiresIn?: number;
};

export const signUrl = async ({ command, expiresIn = 3600 }: SignUrlParams) =>
  await getSignedUrl(StorageClient, command, { expiresIn });
