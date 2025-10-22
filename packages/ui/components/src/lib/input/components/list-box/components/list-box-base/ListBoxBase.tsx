import {
  Listbox as HeadlessListBox,
  ListboxButton as HeadlessListBoxButton,
} from '@headlessui/react';

import { ListBoxAdornment } from '../list-box-adornment/ListBoxAdornment';
import { ListBoxClear } from '../list-box-clear/ListBoxClear';
import { ListBoxNotFound } from '../list-box-not-found/ListBoxNotFound';
import { ListBoxOption } from '../list-box-option/ListBoxOption';
import { ListBoxOptions } from '../list-box-options/ListBoxOptions';
import { ListBoxPanel } from '../list-box-panel/ListBoxPanel';
import { ListBoxSelectAll } from '../list-box-select-all/ListBoxSelectAll';
import { ListBoxSelection } from '../list-box-selection/ListBoxSelection';

export const BaseListBox = {
  Base: HeadlessListBox,
  Button: HeadlessListBoxButton,
  Panel: ListBoxPanel,
  Options: ListBoxOptions,
  Option: ListBoxOption,
  Clear: ListBoxClear,
  SelectAll: ListBoxSelectAll,
  Adornment: ListBoxAdornment,
  Selection: ListBoxSelection,
  NotFound: ListBoxNotFound,
};
