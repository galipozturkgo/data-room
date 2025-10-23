'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { ComboboxOptions as HeadlessComboBoxOptions } from '@headlessui/react';

import { Floating } from '../../../../../floating/Floating';
import { ComboBoxClear } from '../combo-box-clear/ComboBoxClear';
import { ComboBoxNotFound } from '../combo-box-not-found/ComboBoxNotFound';
import { ComboBoxOption } from '../combo-box-option/ComboBoxOption';
import { ComboBoxOptions } from '../combo-box-options/ComboBoxOptions';
import { ComboBoxSelectAll } from '../combo-box-select-all/ComboBoxSelectAll';
import { ComboBoxPanelProps } from './ComboBoxPanel.types';

const ComboBoxPanelBase: React.FC<ComboBoxPanelProps> & {
  Option: typeof ComboBoxOption;
  Options: typeof ComboBoxOptions;
  Clear: typeof ComboBoxClear;
  SelectAll: typeof ComboBoxSelectAll;
  NotFound: typeof ComboBoxNotFound;
} = ({ reference, open, floating, children, className }) => {
  if (reference === undefined) {
    return null;
  }

  const { className: floatingClassName, ...floatingProps } = floating || {};

  return (
    <Floating
      reference={reference}
      autoUpdate
      sameWidth
      open={open}
      shift={{ padding: 0 }}
      placement="bottom-start"
      className={classNames(open && styles.floating, floatingClassName)}
      {...floatingProps}
    >
      <HeadlessComboBoxOptions
        className={classNames(styles.options, className)}
      >
        {(props) =>
          (typeof children === 'function'
            ? children(props)
            : children) as React.ReactElement
        }
      </HeadlessComboBoxOptions>
    </Floating>
  );
};

ComboBoxPanelBase.Options = ComboBoxOptions;
ComboBoxPanelBase.Option = ComboBoxOption;
ComboBoxPanelBase.Clear = ComboBoxClear;
ComboBoxPanelBase.SelectAll = ComboBoxSelectAll;
ComboBoxPanelBase.NotFound = ComboBoxNotFound;

const styles = {
  floating: classes('z-[1800]', 'floating-panel', 'p-1.5'),
  options: classes('max-h-72', 'overflow-auto'),
};

export const ComboBoxPanel = ComboBoxPanelBase;
