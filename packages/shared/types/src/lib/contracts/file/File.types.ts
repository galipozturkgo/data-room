export type FilesParams = {
  folder: string;
};

export type File = {
  id: string;
  url: string;
  signed: string;
  user: string;
  name: string;
  type: string;
  size: number;
  createdAt: string;
};
