'use client';

import { createContext, useContext } from 'react';

interface FolderContextProps {
  activeFolder: string;
  folderHistory: string[];
  changeFolder: (folder: string) => void;
}

export const FolderContext = createContext<FolderContextProps>({
  activeFolder: 'root',
  folderHistory: ['root'],
  changeFolder: () => null,
});

export const useFolder = () => {
  return useContext(FolderContext);
};
