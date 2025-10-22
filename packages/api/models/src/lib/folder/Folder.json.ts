import { Folder } from '@dataroom/shared-types';
import { formatISO } from 'date-fns';

import { UserDoc } from '../user';
import { FolderDoc } from './Folder.model';

export const folderToJSON = async (doc: FolderDoc): Promise<Folder> => {
  await doc.populate('user');

  const user = doc.user as UserDoc;

  return {
    id: doc.id,
    user: [user.firstName, user.lastName].join(' '),
    name: doc.name,
    parent: doc.parent,
    createdAt: formatISO(doc.createdAt),
    lastModifiedAt: doc.lastModifiedAt && formatISO(doc.lastModifiedAt),
  };
};
