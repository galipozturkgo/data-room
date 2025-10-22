import { useSelector } from 'react-redux';

import { States } from './Store.types';

export const useStateSelector = <TSelected>(
  selector: (state: States) => TSelected,
): TSelected => {
  return useSelector(selector);
};
