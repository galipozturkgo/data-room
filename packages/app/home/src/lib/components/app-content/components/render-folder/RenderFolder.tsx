import { Table } from '@dataroom/ui-components';
import { useFolderColumns } from '../../hooks/useFolderColumns';
import { useFilesQuery, useFolderQuery } from '@dataroom/ui-queries';
import { getCoreRowModel, TableOptions } from '@tanstack/react-table';
import { useFolder } from '../folder-context/FolderContext';
import FolderBreadcrumb from '../folder-breadcrumb/FolderBreadcrumb';
import { useCallback, useEffect, useState } from 'react';
import { FolderRowData } from './RenderFolder.types';
import FolderCaption from '../folder-caption/FolderCaption';
import FolderDropzone from '../folder-dropzone/FolderDropzone';

const RenderFolder = () => {
  const { activeFolder } = useFolder();
  const { columns } = useFolderColumns();
  const [data, setData] = useState<FolderRowData[]>([]);

  const {
    data: folderData,
    refetch: folderRefetch,
    isFetching: isFolderFetching,
  } = useFolderQuery({
    parent: activeFolder,
  });
  const {
    data: filesData,
    refetch: filesRefetch,
    isFetching: isFilesFetching,
  } = useFilesQuery({
    folder: activeFolder,
  });

  const mapFolderRowData = useCallback(async () => {
    if (!folderData && !filesData) {
      return;
    }

    const merged: FolderRowData[] = [];

    if (folderData) {
      folderData.forEach((folder) => {
        merged.push({ row: 'folder', ...folder });
      });
    }

    if (filesData) {
      filesData.forEach((file) => {
        merged.push({ row: 'file', ...file });
      });
    }

    setData(merged);
  }, [folderData, filesData]);

  useEffect(() => {
    mapFolderRowData();
  }, [mapFolderRowData]);

  const handleRefetch = async () => {
    await folderRefetch();
    await filesRefetch();
  };

  const options: TableOptions<FolderRowData> = {
    data: data || [],
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
  };

  return (
    <Table<FolderRowData>
      options={options}
      isLoading={isFolderFetching || isFilesFetching}
    >
      <Table.Panel>
        <Table.Caption
          refresh={{
            loading: isFolderFetching || isFilesFetching,
            variant: 'default',
            onClick: handleRefetch,
          }}
          bottom={<FolderBreadcrumb />}
        >
          <FolderCaption />
        </Table.Caption>

        <Table.Head />
        <Table.Body notFoundRow={<FolderDropzone />} />
      </Table.Panel>
    </Table>
  );
};

export default RenderFolder;
