import { IconButton, PenIcon, Popover, Tooltip } from '@dataroom/ui-components';
import EditFolderForm from '../edit-folder-form/EditFolderForm';
import { classes } from '@dataroom/ui-utils';
import { EditFolderProps } from './EditFolder.types';

const EditFolder: React.FC<EditFolderProps> = (folder) => {
  return (
    <Popover>
      <Tooltip title="Edit">
        <Popover.Button
          as={IconButton}
          color="green"
          variant="outlined"
          icon={<PenIcon />}
        />
      </Tooltip>
      <Popover.Panel
        floating={{
          placement: 'bottom-start',
        }}
        className={styles.panel}
      >
        {({ close }) => <EditFolderForm {...folder} onClose={close} />}
      </Popover.Panel>
    </Popover>
  );
};

const styles = {
  panel: classes('w-64'),
};

export default EditFolder;
