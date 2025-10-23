import { useDropzone } from 'react-dropzone';
import { useFolder } from '../components/folder-context/FolderContext';
import {
  ACCEPT_FILES,
  MAX_SIZE,
} from '../components/folder-context/FolderProvider';

type FileDropzoneProps = {
  noClick?: boolean;
  onClose?: () => void;
};

export const useFileDropzone = (args?: FileDropzoneProps) => {
  const { onFilesDropped } = useFolder();

  return useDropzone({
    accept: ACCEPT_FILES,
    multiple: false,
    maxSize: MAX_SIZE,
    noKeyboard: true,
    noClick: args?.noClick,
    onDrop: (files, rejections, event) => {
      onFilesDropped(files, rejections, event);
      args?.onClose?.();
    },
  });
};
