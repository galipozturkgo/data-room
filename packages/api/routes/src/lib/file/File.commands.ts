import {
  getObject,
  putObject,
  PutObjectParams,
  signUrl,
} from '@dataroom/api-utils';

export const signFile = async ({
  folder,
  name,
  type,
  options = {},
}: PutObjectParams): Promise<{ key: string; signed: string }> => {
  const { key, command } = putObject({ folder, name, type, options });

  const signed = await signUrl({ command });

  return { key, signed };
};

export const getFile = async ({ key }: { key: string }) => {
  const { command } = getObject({ key });

  return await signUrl({ command });
};
