export type AddFiles = {
  folder: string;
  files: {
    key: string;
    name: string;
    type: string;
    size: number;
  }[];
};
