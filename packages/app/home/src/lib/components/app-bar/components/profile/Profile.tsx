import { Button, LogoutIcon } from '@dataroom/ui-components';
import { useAuth } from '@dataroom/ui-contexts';
import { useLogoutMutation } from '@dataroom/ui-queries';
import { classes } from '@dataroom/ui-utils';
import { useEffect } from 'react';
const Profile = () => {
  const { user, logout } = useAuth();
  const [logoutUser, { isSuccess, isLoading }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      logout();
    }
  }, [isSuccess]);

  const handleLogout = async () => await logoutUser();

  return (
    <div className={styles.root}>
      <span>{[user?.firstName, user?.lastName].join(' ')}</span>
      <Button
        color="accent"
        variant="contained"
        className={styles.button}
        endIcon={<LogoutIcon />}
        loading={isLoading}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

const styles = {
  root: classes(
    'flex',
    'flex-col',
    'items-center',
    'bg-skin-primary',
    'p-2',
    'rounded-2xl',
    'space-y-2',
    'border',
    'border-skin-primary/15',
    'text-skin-inverted',
  ),
  button: classes('w-full', 'justify-start', 'shadow-xl'),
};

export default Profile;
