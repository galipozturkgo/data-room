import { classes } from '@dataroom/ui-utils';
import Brand from './components/brand/Brand';
import Profile from './components/profile/Profile';

const AppBar = () => {
  return (
    <div className={styles.root}>
      <Brand />
      <Profile />
    </div>
  );
};

const styles = {
  root: classes(
    'bg-skin-accent/20',
    'h-28',
    'flex',
    'items-center',
    'px-10',
    'py-4',
    'justify-between',
  ),
};

export default AppBar;
