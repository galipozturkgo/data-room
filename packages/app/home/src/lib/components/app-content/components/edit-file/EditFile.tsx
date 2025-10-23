import { IconButton, PenIcon, Popover, Tooltip } from '@dataroom/ui-components';
import EditFileForm from '../edit-file-form/EditFileForm';
import { classes } from '@dataroom/ui-utils';
import { EditFileProps } from './EditFile.types';

const EditFile: React.FC<EditFileProps> = (file) => {
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
        {({ close }) => <EditFileForm {...file} onClose={close} />}
      </Popover.Panel>
    </Popover>
  );
};

const styles = {
  panel: classes('w-72'),
};

export default EditFile;
