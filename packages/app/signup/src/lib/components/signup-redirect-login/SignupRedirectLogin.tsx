import { LinkButton } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';
import { useNavigate } from 'react-router-dom';

const SignupRedirectLogin = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span className={styles.text}>Have an account?</span>
      <LinkButton
        color="accent"
        onClick={() => navigate('/login')}
        tabIndex={0}
      >
        Log In
      </LinkButton>
    </div>
  );
};

const styles = {
  text: classes('text-sm'),
  container: classes('space-x-2'),
};

export default SignupRedirectLogin;
