import { ChipInputOption } from './ChipInput.types';

export const findDuplicateChipValues = (items: ChipInputOption[]): string[] => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const item of items) {
    if (item.deleted) {
      continue;
    }

    const val = item?.value?.toLowerCase().trim();

    if (seen.has(val)) {
      duplicates.add(val);
    } else {
      seen.add(val);
    }
  }

  return Array.from(duplicates);
};
