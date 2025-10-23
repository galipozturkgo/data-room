import { FolderAddIcon, MenuButton, Popover } from '@dataroom/ui-components';
import AddFolderForm from '../add-folder-form/AddFolderForm';
import { classes } from '@dataroom/ui-utils';
import { AddFolderProps } from './AddFolder.types';

const AddFolder: React.FC<AddFolderProps> = ({ onClose }) => {
  return (
    <Popover>
      <Popover.Button as={MenuButton} icon={<FolderAddIcon />}>
        Add folder
      </Popover.Button>
      <Popover.Panel
        floating={{
          placement: 'bottom-start',
          offset: 15,
          className: styles.floating,
        }}
        className={styles.panel}
      >
        {({ close }) => (
          <AddFolderForm
            onClose={() => {
              close();
              onClose();
            }}
          />
        )}
      </Popover.Panel>
    </Popover>
  );
};

const styles = {
  panel: classes('w-64'),
  floating: classes('-ml-2.5'),
};

export default AddFolder;
