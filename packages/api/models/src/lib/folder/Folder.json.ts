import { Folder } from '@dataroom/shared-types';
import { formatISO } from 'date-fns';

import { FileModel } from '../file';
import { UserDoc } from '../user';
import { FolderDoc } from './Folder.model';

export const folderToJSON = async (doc: FolderDoc): Promise<Folder> => {
  await doc.populate('user');

  const user = doc.user as UserDoc;

  const size = await (
    await FileModel.find({ folder: doc })
  ).reduce((acc, next) => (acc += next.size), 0);

  return {
    id: doc.id,
    user: [user.firstName, user.lastName].join(' '),
    size,
    name: doc.name,
    parent: doc.parent,
    createdAt: formatISO(doc.createdAt),
    lastModifiedAt: doc.lastModifiedAt && formatISO(doc.lastModifiedAt),
  };
};
