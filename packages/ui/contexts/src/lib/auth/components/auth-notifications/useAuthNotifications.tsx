import { useNotifications } from '@dataroom/ui-components';

import { accountAlreadyExists } from './components/AccountAlreadyExists';
import { accountNotFound } from './components/AccountNotFound';
import { invalidCredentials } from './components/InvalidCredentials';
import { somethingWentWrong } from './components/SomethingWentWrong';

const notifications = {
  AccountNotFound: accountNotFound,
  InvalidCredentials: invalidCredentials,
  AccountAlreadyExists: accountAlreadyExists,
  SomethingWentWrong: somethingWentWrong,
};

export const useAuthNotifications = () =>
  useNotifications<typeof notifications>(notifications);
