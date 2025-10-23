export type Folder = {
  id: string;
  user: string;
  name: string;
  size: number;
  parent: string;
  createdAt: string;
  lastModifiedAt?: string;
};

export type FolderParams = Pick<Folder, 'parent'>;
