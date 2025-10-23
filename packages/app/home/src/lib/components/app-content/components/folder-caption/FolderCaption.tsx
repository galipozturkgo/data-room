import AddItems from '../add-items/AddItems';
import UploadStatus from '../upload-status/UploadStatus';
import { Table } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

const FolderCaption = () => {
  return (
    <div className={styles.header}>
      <div className="flex items-center gap-2">
        <AddItems />
        <UploadStatus />
      </div>
      <Table.Pagination className={styles.pagination} />
    </div>
  );
};

const styles = {
  header: classes('flex', 'w-full', 'justify-between', 'items-center'),
  pagination: classes('py-0'),
};

export default FolderCaption;
