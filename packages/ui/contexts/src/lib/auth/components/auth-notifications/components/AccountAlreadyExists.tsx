import { Button, NotificationItem } from '@dataroom/ui-components';

export const accountAlreadyExists = (
  onLoginClick: () => void,
): NotificationItem => {
  return {
    title: 'ui.shared.auth.notifications.accountAlreadyExists.message',
    color: 'green',
    description:
      'ui.shared.auth.notifications.accountAlreadyExists.description',
    content: ({ close }) => (
      <Button
        variant="contained"
        color="green"
        onClick={() => {
          onLoginClick();
          close();
        }}
      >
        'ui.shared.auth.notifications.accountAlreadyExists.signup'
      </Button>
    ),
  };
};
