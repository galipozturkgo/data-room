import { getObject, signUrl } from '@dataroom/api-utils';
import { File } from '@dataroom/shared-types';
import { formatISO } from 'date-fns';

import { UserDoc } from '../user';
import { FileDoc } from './File.model';

export const fileToJSON = async (doc: FileDoc): Promise<File> => {
  await doc.populate('user');

  const { command } = getObject({ key: doc.key });

  const signed = await signUrl({ command });

  const user = doc.user as UserDoc;

  return {
    id: doc.id,
    url: doc.key,
    signed,
    user: [user.firstName, user.lastName].join(' '),
    name: doc.name,
    size: doc.size,
    type: doc.type,
    createdAt: formatISO(doc.createdAt),
  };
};
