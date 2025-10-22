'use client';

import { useState } from 'react';
import { FolderContext } from './FolderContext';

interface FolderProviderProps {
  children: React.ReactNode;
}

export const FolderProvider: React.FC<FolderProviderProps> = ({ children }) => {
  const [activeFolder, setActiveFolder] = useState<string>('root');
  const [folderHistory, setFolderHistory] = useState<string[]>(['root']);

  const changeFolder = (folder: string) => {
    setActiveFolder(folder);

    setFolderHistory((prev) => {
      const existingIndex = prev.indexOf(folder);

      if (existingIndex === -1) {
        return [...prev, folder];
      } else {
        return prev.slice(0, existingIndex + 1);
      }
    });
  };

  return (
    <FolderContext.Provider
      value={{
        activeFolder,
        folderHistory,
        changeFolder,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};
