import { FileModel } from '@dataroom/api-models';
import {
  getObject,
  PutObject,
  putObject,
  signUrl,
  StorageClient,
} from '@dataroom/api-utils';

type AddFile = PutObject & {
  user: string;
  folder: string;
  sign?: boolean;
};

export const addFile = async ({
  user,
  folder,
  prefix,
  name,
  type,
  options = {},
}: AddFile): Promise<{ key: string; signed: string }> => {
  const { key, command } = putObject({ prefix, name, type, options });

  if (options.Body) {
    await StorageClient.send(command);
  }

  const signed = await signUrl({ command });

  await FileModel.add({
    user,
    folder,
    key,
    type,
    name,
  }).save();

  return { key, signed };
};

export const getFile = async ({ key }: { key: string }) => {
  const { command } = getObject({ key });

  return await signUrl({ command });
};
