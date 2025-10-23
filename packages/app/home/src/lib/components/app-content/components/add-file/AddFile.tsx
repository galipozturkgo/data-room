import { FileIcon, MenuButton } from '@dataroom/ui-components';
import { AddFileProps } from './AddFile.types';
import { useFileDropzone } from '../../hooks/useFileDropzone';

const AddFile: React.FC<AddFileProps> = ({ onClose }) => {
  const { getRootProps, getInputProps } = useFileDropzone({ onClose });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <MenuButton icon={<FileIcon />}>Add file</MenuButton>
    </div>
  );
};

export default AddFile;
