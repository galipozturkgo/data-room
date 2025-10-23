import { CopyObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { parseFileName } from '@dataroom/shared-utils';
import { v4 as uuidv4 } from 'uuid';

import { getEnv } from '../envs/Envs';
import { StorageClient } from './Storage';

export type CopyObject = {
  source: string;
  prefix: string;
  options?: Pick<PutObjectCommandInput, 'ACL'>;
};

export const copyObject = async ({
  source,
  prefix,
  options = {},
}: CopyObject) => {
  const { ext } = parseFileName(source);

  const key = `${prefix.replace(/^\/|\/$/g, '')}/${uuidv4()}.${ext}`;

  const bucket = getEnv('S3_BUCKET_NAME');

  const command = new CopyObjectCommand({
    Bucket: bucket,
    Key: key,
    CopySource: `${bucket}/${source}`,
    ...options,
  });

  await StorageClient.send(command);

  return { key };
};
