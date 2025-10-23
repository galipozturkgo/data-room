export const parseFileName = (
  fileName: string,
): { name?: string; ext?: string } => {
  const match = fileName.match(/^(.+?)\.([a-zA-Z0-9]+)(?:[?#]|$)/);

  if (!match) {
    return {};
  }

  return {
    name: match[1],
    ext: match[2].toLowerCase(),
  };
};
