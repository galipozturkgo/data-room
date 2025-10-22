import { classes } from '@dataroom/ui-utils';
import AppBar from './components/app-bar/AppBar';
import AppContent from './components/app-content/AppContent';

const Home = () => {
  return (
    <div className={styles.root}>
      <AppBar />
      <AppContent />
    </div>
  );
};

const styles = {
  root: classes('flex', 'flex-col', 'h-full'),
};

export default Home;
