import { LinkButton, RightIcon } from '@dataroom/ui-components';
import { useFolder } from '../folder-context/FolderContext';
import { classes, classNames } from '@dataroom/ui-utils';

const FolderBreadcrumb = () => {
  const { folderHistory, changeFolder } = useFolder();

  return (
    <div className={styles.root}>
      {folderHistory.map((folder, index) => {
        const isRoot = folder === 'root';
        const isLast = index === folderHistory.length - 1;

        return (
          <div key={folder} className={styles.item}>
            <LinkButton
              color={isLast ? 'primary' : 'accent'}
              className={classNames(isLast && styles.active)}
              onClick={() => !isLast && changeFolder(folder)}
            >
              {isRoot ? 'Root' : folder}
            </LinkButton>

            {!isLast && <RightIcon className="text-skin-muted" />}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  root: classes(
    'mt-2.5',
    'p-2.5',
    'flex',
    'items-center',
    'flex-wrap',
    'rounded-full',
    'bg-skin-accent/20',
  ),
  item: classes('flex', 'items-center'),
  active: classes('font-semibold'),
};

export default FolderBreadcrumb;
