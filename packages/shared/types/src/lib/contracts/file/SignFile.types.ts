export enum Buckets {
  Public = 'public',
  Private = 'private',
}

export type SignFileParams = {
  id: string;
  folder: string;
  name: string;
  type: string;
};

export type SingedFile = {
  id: string;
  key: string;
  signed: string;
};
