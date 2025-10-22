import { SnackbarColor } from '../snackbar/Snackbar.types';

export type SnackbarMessageProps = {
  item: string | React.ReactNode;
  color: SnackbarColor;
};
