'use client';

import { useCallback, useState } from 'react';
import { FolderContext } from './FolderContext';
import { UploadStatus, useSnackbar } from '@dataroom/ui-components';
import { v4 as uuidv4 } from 'uuid';
import {
  UploadFileItem,
  useAddFilesMutation,
  useFileUpload,
  useSignFilesMutation,
} from '@dataroom/ui-queries';
import { AddFiles, SignFileParams } from '@dataroom/shared-types';
import { DropzoneOptions, ErrorCode, FileRejection } from 'react-dropzone';

interface FolderProviderProps {
  children: React.ReactNode;
}

export const MAX_SIZE = 64 * 1024 * 1024;

export const ACCEPT_FILES = {
  'application/pdf': ['.pdf'],
};

export const FolderProvider: React.FC<FolderProviderProps> = ({ children }) => {
  const { addMessage } = useSnackbar();
  const { uploadFile } = useFileUpload();
  const [singFiles] = useSignFilesMutation();
  const [addFiles] = useAddFilesMutation();
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>();

  const [activeFolder, setActiveFolder] = useState<string>('root');
  const [folderHistory, setFolderHistory] = useState<string[]>(['root']);

  const changeFolder = useCallback((folder: string) => {
    setActiveFolder(folder);

    setFolderHistory((prev) => {
      const existingIndex = prev.indexOf(folder);

      if (existingIndex === -1) {
        return [...prev, folder];
      } else {
        return prev.slice(0, existingIndex + 1);
      }
    });
  }, []);

  const uploadFiles = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setUploadStatus(0);

        const files = acceptedFiles.map((file) => ({
          id: uuidv4(),
          file,
        }));

        const signFiles = files.map(
          ({ id, file }): SignFileParams => ({
            id,
            folder: activeFolder,
            name: file.name,
            type: file.type,
          }),
        );

        const signedFiles = await singFiles(signFiles).unwrap();

        const uploadFiles = signedFiles.map(
          ({ id, signed }): UploadFileItem => ({
            url: signed,
            file: files.find((file) => file.id === id)!.file,
          }),
        );

        await uploadFile({
          file: uploadFiles,
          onProgress: setUploadStatus,
        });

        const uploadedFiles: AddFiles = {
          folder: activeFolder,
          files: signedFiles.map(({ id, key }) => {
            const file = files.find((file) => file.id === id)!.file;

            return {
              key,
              name: file.name,
              type: file.type,
              size: file.size,
            };
          }),
        };

        await addFiles(uploadedFiles).unwrap();

        setTimeout(() => setUploadStatus(undefined), 1500);
      } catch {
        setUploadStatus('failed');
      }
    },
    [activeFolder],
  );

  const onFilesDropped: DropzoneOptions['onDrop'] = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (
        fileRejections.some((i) =>
          i.errors.some((w) => w.code === ErrorCode.FileTooLarge),
        )
      ) {
        addMessage({
          item: `You can not select file larger than ${MAX_SIZE / 1024} kb `,
          color: 'red',
        });

        return;
      }

      uploadFiles(acceptedFiles);
    },
    [uploadFiles],
  );

  return (
    <FolderContext.Provider
      value={{
        activeFolder,
        folderHistory,
        changeFolder,
        uploadStatus,
        onFilesDropped,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};
