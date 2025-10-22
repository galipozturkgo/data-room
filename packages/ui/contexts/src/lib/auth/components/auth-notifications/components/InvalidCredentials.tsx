import { Button, NotificationItem } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

export const invalidCredentials = (
  onPasswordResetClick?: () => void,
): NotificationItem => {
  return {
    title: 'ui.shared.auth.notifications.invalidCredentials.message',
    color: 'red',
    description: 'ui.shared.auth.notifications.invalidCredentials.description',
    content: onPasswordResetClick
      ? ({ close }) => (
          <div className={styles.container}>
            <span>
              'ui.shared.auth.notifications.invalidCredentials.passwordReset',
            </span>
            <Button
              variant="contained"
              color="accent"
              onClick={() => {
                onPasswordResetClick();
                close();
              }}
            >
              'ui.shared.auth.notifications.invalidCredentials.resetPassword',
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
