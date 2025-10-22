import { Folder } from './Folder.types';

export type AddFolder = Pick<Folder, 'name' | 'parent'>;
