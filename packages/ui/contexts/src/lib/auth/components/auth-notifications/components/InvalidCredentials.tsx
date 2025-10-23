import { Button, NotificationItem } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

export const invalidCredentials = (
  onPasswordResetClick?: () => void,
): NotificationItem => {
  return {
    title: 'Your credentials is incorrect',
    color: 'red',
    description: 'Please check your credentials and try again',
    content: onPasswordResetClick
      ? ({ close }) => (
          <div className={styles.container}>
            <span>Forgot your password</span>
            <Button
              variant="contained"
              color="accent"
              onClick={() => {
                onPasswordResetClick();
                close();
              }}
            >
              Reset Password
            </Button>
          </div>
        )
      : undefined,
  };
};

const styles = {
  container: classes(
    'flex',
    'text-xs',
    'items-center',
    'text-skin-muted',
    'justify-between',
  ),
};
