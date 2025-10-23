import { Button, NotificationItem } from '@dataroom/ui-components';

export const accountAlreadyExists = (
  onLoginClick: () => void,
): NotificationItem => {
  return {
    title: 'Account already exists',
    color: 'green',
    description: 'Already an account connected to the this email',
    content: ({ close }) => (
      <Button
        variant="contained"
        color="green"
        onClick={() => {
          onLoginClick();
          close();
        }}
      >
        Log In
      </Button>
    ),
  };
};
