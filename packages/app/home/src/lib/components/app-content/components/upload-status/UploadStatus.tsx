import { Uploading } from '@dataroom/ui-components';
import { useFolder } from '../folder-context/FolderContext';

const UploadStatus = () => {
  const { uploadStatus } = useFolder();

  return <Uploading progress={uploadStatus} />;
};

export default UploadStatus;
