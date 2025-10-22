import { LinkButton } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';
import { useNavigate } from 'react-router-dom';

const RedirectToSignup = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span className={styles.text}>Don't have an account?</span>
      <LinkButton
        color="accent"
        onClick={() => navigate('/signup')}
        tabIndex={0}
      >
        Sign Up
      </LinkButton>
    </div>
  );
};

const styles = {
  text: classes('text-sm'),
  container: classes('space-x-2'),
};

export default RedirectToSignup;
