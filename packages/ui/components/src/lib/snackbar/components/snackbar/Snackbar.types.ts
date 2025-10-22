export type SnackbarColor = 'green' | 'red' | 'blue' | 'orange';

export interface SnackMessage {
  item: React.ReactNode;
  color?: SnackbarColor;
  dismissible?: boolean;
  autoDismiss?: boolean;
  dismissDelay?: number;
  className?: string;
}
