'use client';
import { DropzoneOptions } from 'react-dropzone';
import { UploadStatus } from '@dataroom/ui-components';
import { createContext, useContext } from 'react';
import { NonUndefined } from 'react-hook-form';

interface FolderContextProps {
  activeFolder: string;
  folderHistory: string[];
  changeFolder: (folder: string) => void;
  uploadStatus: UploadStatus | undefined;
  onFilesDropped: NonUndefined<DropzoneOptions['onDrop']>;
}

export const FolderContext = createContext<FolderContextProps>({
  activeFolder: 'root',
  folderHistory: ['root'],
  changeFolder: () => null,
  uploadStatus: undefined,
  onFilesDropped: () => null,
});

export const useFolder = () => {
  return useContext(FolderContext);
};
