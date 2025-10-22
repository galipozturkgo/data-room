import { parseISO } from 'date-fns';
import { Folder } from '@dataroom/shared-types';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { classes } from '@dataroom/ui-utils';
import NavigateFolder from '../navigate-folder/NavigateFolder';
import DeleteFolder from '../delete-folder/DeleteFolder';
import EditFolder from '../edit-folder/EditFolder';

const columnHelper = createColumnHelper<Folder>();

export const useFolderColumns = () => {
  const columns: ColumnDef<Folder, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: ({ row }) => <NavigateFolder name={row.original.name} />,
    }),
    columnHelper.accessor('user', {
      header: 'Created by',
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created at',
      cell: ({ row }) => parseISO(row.original.createdAt).toLocaleDateString(),
    }),
    columnHelper.accessor('lastModifiedAt', {
      header: 'Last modified at',
      cell: ({ row }) =>
        row.original.lastModifiedAt &&
        parseISO(row.original.lastModifiedAt).toLocaleString(),
    }),
    columnHelper.display({
      header: 'Actions',
      cell: ({ row }) => (
        <div className={styles.actions}>
          <EditFolder id={row.original.id} name={row.original.name} />
          <DeleteFolder id={row.original.id} name={row.original.name} />
        </div>
      ),
    }),
  ];

  return { columns };
};

const styles = {
  actions: classes('flex', 'gap-2'),
};
