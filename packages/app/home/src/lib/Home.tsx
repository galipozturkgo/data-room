import { classes } from '@dataroom/ui-utils';
import AppBar from './components/app-bar/AppBar';
import AppContent from './components/app-content/AppContent';
import { FolderProvider } from './components/app-content/components/folder-context/FolderProvider';

const Home = () => {
  return (
    <div className={styles.root}>
      <AppBar />
      <FolderProvider>
        <AppContent />
      </FolderProvider>
    </div>
  );
};

const styles = {
  root: classes('flex', 'flex-col', 'h-full'),
};

export default Home;
