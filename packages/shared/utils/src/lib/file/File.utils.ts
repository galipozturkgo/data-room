export const extractFileExtension = (fileName: string): string | null => {
  const match = fileName.match(/\.([a-zA-Z0-9]+)(?:[?#]|$)/);
  return match ? match[1].toLowerCase() : null;
};
