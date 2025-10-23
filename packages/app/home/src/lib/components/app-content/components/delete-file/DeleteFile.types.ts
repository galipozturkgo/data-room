import { File } from '@dataroom/shared-types';

export type DeleteFileProps = Pick<File, 'url' | 'name'>;
