import {
  Combobox as HeadlessComboBox,
  ComboboxButton as HeadlessComboBoxButton,
  ComboboxInput as HeadlessComboBoxInput,
} from '@headlessui/react';

import { ComboBoxAdornment } from '../combo-box-adornment/ComboBoxAdornment';
import { ComboBoxClear } from '../combo-box-clear/ComboBoxClear';
import { ComboBoxLoading } from '../combo-box-loading/ComboBoxLoading';
import { ComboBoxNotFound } from '../combo-box-not-found/ComboBoxNotFound';
import { ComboBoxOption } from '../combo-box-option/ComboBoxOption';
import { ComboBoxOptions } from '../combo-box-options/ComboBoxOptions';
import { ComboBoxPanel } from '../combo-box-panel/ComboBoxPanel';
import { ComboBoxSelectAll } from '../combo-box-select-all/ComboBoxSelectAll';

export const BaseComboBox = {
  Base: HeadlessComboBox,
  Button: HeadlessComboBoxButton,
  Input: HeadlessComboBoxInput,
  Panel: ComboBoxPanel,
  Options: ComboBoxOptions,
  Option: ComboBoxOption,
  Clear: ComboBoxClear,
  SelectAll: ComboBoxSelectAll,
  Adornment: ComboBoxAdornment,
  NotFound: ComboBoxNotFound,
  Loading: ComboBoxLoading,
};
