import { AuthUser } from '@dataroom/shared-types';
import { formatISO } from 'date-fns';

import { UserDoc } from './User.model';

export const authUserToJSON = (doc: UserDoc): AuthUser => {
  return {
    id: doc.id,
    createdAt: formatISO(doc.createdAt),
    email: doc.email,
    firstName: doc.firstName,
    lastName: doc.lastName,
  };
};
