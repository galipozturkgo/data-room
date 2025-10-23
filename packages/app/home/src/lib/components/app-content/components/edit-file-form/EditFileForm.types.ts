import { File } from '@dataroom/shared-types';

export type EditFileFormProps = Pick<File, 'id' | 'name'> & {
  onClose: () => void;
};
