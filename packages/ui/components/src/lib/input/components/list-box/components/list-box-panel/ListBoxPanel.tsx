'use client';

import { ListboxOptions as HeadlessListBoxOptions } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';

import { Floating } from '../../../../../floating/Floating';
import { ListBoxPanelProps } from './ListBoxPanel.types';

const ListBoxPanelBase: React.FC<ListBoxPanelProps> = ({
  open,
  reference,
  floating,
  children,
  className,
}) => {
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
      <HeadlessListBoxOptions className={classNames(styles.options, className)}>
        {(props) =>
          (typeof children === 'function'
            ? children(props)
            : children) as React.ReactElement
        }
      </HeadlessListBoxOptions>
    </Floating>
  );
};

const styles = {
  floating: classes('z-[1800]', 'floating-panel', 'p-1.5'),
  options: classes('max-h-72', 'overflow-hidden', 'overflow-y-auto'),
};

export const ListBoxPanel = ListBoxPanelBase;
