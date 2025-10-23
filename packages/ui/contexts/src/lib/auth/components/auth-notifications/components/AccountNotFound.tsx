import { Button, NotificationItem } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

export const accountNotFound = (
  onSignupClick?: () => void,
): NotificationItem => {
  return {
    title: 'Account not found',
    color: 'red',
    description: 'We could not find an account connected to this email',

    content: onSignupClick
      ? ({ close }) => (
          <div className={styles.container}>
            <span>Don't have an account?</span>
            <Button
              variant="contained"
              color="accent"
              onClick={() => {
                onSignupClick();
                close();
              }}
            >
              Sign Up
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
