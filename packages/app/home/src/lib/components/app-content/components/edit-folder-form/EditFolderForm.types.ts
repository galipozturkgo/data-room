import { Folder } from '@dataroom/shared-types';

export type EditFolderFormProps = Pick<Folder, 'id' | 'name'> & {
  onClose: () => void;
};
