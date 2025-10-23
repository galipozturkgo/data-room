import { LinkButton, RightIcon } from '@dataroom/ui-components';
import React from 'react';
import { NavigateFolderProps } from './NavigateFolder.types';
import { useFolder } from '../folder-context/FolderContext';
import { classes } from '@dataroom/ui-utils';

const NavigateFolder: React.FC<NavigateFolderProps> = ({ name }) => {
  const { activeFolder, changeFolder } = useFolder();
  const handleNavigate = () => activeFolder !== name && changeFolder(name);

  return (
    <LinkButton
      color="accent"
      startIcon={<RightIcon />}
      onClick={handleNavigate}
      className={styles.button}
    >
      {name}
    </LinkButton>
  );
};

const styles = {
  button: classes('font-semibold'),
};

export default NavigateFolder;
