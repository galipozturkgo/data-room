import { Folder } from '@dataroom/shared-types';
import { Table } from '@dataroom/ui-components';
import { useFolderColumns } from './useFolderColumns';
import { useFoldersQuery } from '@dataroom/ui-queries';
import { getCoreRowModel, TableOptions } from '@tanstack/react-table';
import { useFolder } from '../folder-context/FolderContext';
import FolderBreadcrumb from '../folder-breadcrumb/FolderBreadcrumb';
import AddItems from '../add-items/AddItems';

const ListFolders = () => {
  const { activeFolder } = useFolder();
  const { columns } = useFolderColumns();
  const { data, refetch, isFetching } = useFoldersQuery({
    parent: activeFolder,
  });

  const options: TableOptions<Folder> = {
    data: data || [],
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
  };

  return (
    <Table<Folder> options={options} isLoading={isFetching}>
      <Table.Panel>
        <Table.Caption
          refresh={{
            loading: isFetching,
            variant: 'default',
            onClick: refetch,
          }}
          bottom={<FolderBreadcrumb />}
        >
          <AddItems />
        </Table.Caption>

        <Table.Head />
        <Table.Body />
      </Table.Panel>
      <Table.Pagination />
    </Table>
  );
};

export default ListFolders;
