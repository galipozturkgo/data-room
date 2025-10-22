import { Button, NotificationItem } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

export const accountNotFound = (
  onSignupClick?: () => void,
): NotificationItem => {
  return {
    title: 'ui.shared.auth.notifications.accountNotFound.message',
    color: 'red',
    description: 'ui.shared.auth.notifications.accountNotFound.description',

    content: onSignupClick
      ? ({ close }) => (
          <div className={styles.container}>
            <span>
              ui.shared.auth.notifications.accountNotFound.createAccount
            </span>
            <Button
              variant="contained"
              color="accent"
              onClick={() => {
                onSignupClick();
                close();
              }}
            >
              'ui.shared.auth.notifications.accountNotFound.signup'
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
