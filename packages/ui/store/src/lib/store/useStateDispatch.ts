import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { Dispatches } from './Store.types';

export const useStateDispatch = <
  T extends ThunkDispatch<unknown, unknown, never> = Dispatches,
>() => {
  const dispatch = useDispatch<T>();

  return { dispatch };
};
