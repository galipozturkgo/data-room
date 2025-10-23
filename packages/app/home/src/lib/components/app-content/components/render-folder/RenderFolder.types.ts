import { Folder, File } from '@dataroom/shared-types';

export type FolderRowData =
  | ({
      row: 'folder';
    } & Folder)
  | ({
      row: 'file';
    } & File);
