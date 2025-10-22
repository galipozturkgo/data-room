import { classes } from '@dataroom/ui-utils';
import ListFolders from './components/list-folders/ListFolders';
import { FolderProvider } from './components/folder-context/FolderProvider';

const AppContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <FolderProvider>
          <ListFolders />
        </FolderProvider>
      </div>
    </div>
  );
};

const styles = {
  root: classes('h-full', 'w-full', 'px-8', 'bg-skin-accent/20'),
  container: classes(
    'px-6',
    'py-3',
    'bg-skin-base',
    'rounded-3xl',
    'border',
    'border-skin-primary/15',
  ),
};

export default AppContent;
