import { Button, LogoutIcon } from '@dataroom/ui-components';
import { useAuth } from '@dataroom/ui-contexts';
import { useLogoutMutation } from '@dataroom/ui-queries';
import { classes } from '@dataroom/ui-utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [logoutUser, { isSuccess, isLoading }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      logout();
      navigate('/login');
    }
  }, [isSuccess]);

  const handleLogout = async () => await logoutUser();

  return (
    <div className={styles.root}>
      <span>{[user?.firstName, user?.lastName].join(' ')}</span>
      <Button
        color="primary"
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
    'bg-skin-accent/50',
    'p-1',
    'rounded-2xl',
    'space-y-1',
    'border',
    'border-skin-primary/10',
  ),
  button: classes('w-full', 'justify-start'),
};

export default Profile;
