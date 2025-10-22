export enum Buckets {
  Public = 'public',
  Private = 'private',
}

export type SignFileParams = {
  prefix: string;
  name: string;
  type: string;
  folder: string;
};

export type SingedFile = {
  name: string;
  key: string;
  signed: string;
};
