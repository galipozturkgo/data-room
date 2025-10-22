import { Button, Popover, PlusIcon } from '@dataroom/ui-components';
import { Fragment } from 'react/jsx-runtime';
import AddFolder from '../add-folder/AddFolder';
import { classes } from '@dataroom/ui-utils';

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
          Add
        </Popover.Button>
        <Popover.Panel
          floating={{
            placement: 'bottom-start',
          }}
          className={styles.panel}
        >
          {({ close }) => (
            <Fragment>
              <AddFolder onClose={close} />
            </Fragment>
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
