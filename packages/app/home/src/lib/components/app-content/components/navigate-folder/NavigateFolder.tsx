import { LinkButton, RightIcon } from '@dataroom/ui-components';
import React from 'react';
import { NavigateFolderProps } from './NavigateFolder.types';
import { useFolder } from '../folder-context/FolderContext';

const NavigateFolder: React.FC<NavigateFolderProps> = ({ name }) => {
  const { activeFolder, changeFolder } = useFolder();
  const handleNavigate = () => activeFolder !== name && changeFolder(name);

  return (
    <LinkButton
      color="accent"
      startIcon={<RightIcon />}
      onClick={handleNavigate}
    >
      {name}
    </LinkButton>
  );
};

export default NavigateFolder;
