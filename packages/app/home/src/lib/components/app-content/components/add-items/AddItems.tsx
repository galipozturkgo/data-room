import { Button, Popover, PlusIcon } from '@dataroom/ui-components';
import AddFolder from '../add-folder/AddFolder';
import { classes } from '@dataroom/ui-utils';
import AddFile from '../add-file/AddFile';

const AddItem = () => {
  return (
    <Popover>
      <Popover.Group>
        <Popover.Button
          as={Button}
          color="green"
          variant="outlined"
          startIcon={<PlusIcon />}
        >
          Add item
        </Popover.Button>
        <Popover.Panel
          floating={{
            placement: 'bottom-start',
          }}
          className={styles.panel}
        >
          {({ close }) => (
            <Popover.Content>
              <AddFile onClose={close} />
              <AddFolder onClose={close} />
            </Popover.Content>
          )}
        </Popover.Panel>
      </Popover.Group>
    </Popover>
  );
};

const styles = {
  panel: classes('p-1'),
};

export default AddItem;
