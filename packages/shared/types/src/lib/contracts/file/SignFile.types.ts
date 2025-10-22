export enum Buckets {
  Public = 'public',
  Private = 'private',
}

export type SignFileParams = {
  prefix: string;
  name: string;
  type: string;
  parent?: string;
};

export type SingedFile = {
  name: string;
  key: string;
  signed: string;
};
