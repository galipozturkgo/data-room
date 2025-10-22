import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { extractFileExtension } from '@dataroom/shared-utils';
import { v4 as uuidv4 } from 'uuid';

import { getEnv } from '../envs/Envs';

export type PutObject = {
  prefix: string;
  name: string;
  type: string;
  options?: Pick<PutObjectCommandInput, 'ACL' | 'Body'>;
};

export const putObject = ({ prefix, name, type, options = {} }: PutObject) => {
  const ext = extractFileExtension(name);

  const key = `${prefix.replace(/^\/|\/$/g, '')}/${uuidv4()}.${ext}`;

  const command = new PutObjectCommand({
    Bucket: getEnv('S3_BUCKET_NAME'),
    Key: key,
    ContentType: type,
    ...options,
  });

  return { key, command };
};
