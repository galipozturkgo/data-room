import { parseISO } from 'date-fns';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { classes } from '@dataroom/ui-utils';
import NavigateFolder from '../components/navigate-folder/NavigateFolder';
import DeleteFolder from '../components/delete-folder/DeleteFolder';
import EditFolder from '../components/edit-folder/EditFolder';
import { FolderRowData } from '../components/render-folder/RenderFolder.types';
import { FileIcon } from '@dataroom/ui-components';
import DeleteFile from '../components/delete-file/DeleteFile';
import { Fragment } from 'react/jsx-runtime';
import PreviewFile from '../components/preview-file/PreviewFile';

const columnHelper = createColumnHelper<FolderRowData>();

export const useFolderColumns = () => {
  const columns: ColumnDef<FolderRowData, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: ({ row: { original } }) =>
        original.row === 'folder' ? (
          <NavigateFolder name={original.name} />
        ) : (
          <div className="flex pl-1.5 items-center">
            <FileIcon />
            <span className="pl-2 truncate">{original.name}</span>
          </div>
        ),
    }),
    columnHelper.accessor('user', {
      header: 'Created by',
    }),
    columnHelper.accessor('createdAt', {
      header: 'Created at',
      cell: ({ row: { original } }) =>
        parseISO(original.createdAt).toLocaleDateString(),
    }),
    columnHelper.accessor('lastModifiedAt', {
      header: 'Last modified at',
      cell: ({ row: { original } }) =>
        original.row === 'folder' &&
        original.lastModifiedAt &&
        parseISO(original.lastModifiedAt).toLocaleString(),
    }),
    columnHelper.accessor('size', {
      header: 'Size',
      cell: ({ row: { original } }) =>
        original.size > 0 ? `${(original.size / 1024).toFixed(0)} Kb` : '-',
    }),
    columnHelper.display({
      header: 'Actions',
      cell: ({ row: { original } }) => (
        <div className={styles.actions}>
          {original.row === 'folder' ? (
            <Fragment>
              <EditFolder id={original.id} name={original.name} />
              <DeleteFolder id={original.id} name={original.name} />
            </Fragment>
          ) : (
            <Fragment>
              <PreviewFile signed={original.signed} name={original.name} />
              <DeleteFile url={original.url} name={original.name} />
            </Fragment>
          )}
        </div>
      ),
    }),
  ];

  return { columns };
};

const styles = {
  actions: classes('flex', 'gap-2'),
};
