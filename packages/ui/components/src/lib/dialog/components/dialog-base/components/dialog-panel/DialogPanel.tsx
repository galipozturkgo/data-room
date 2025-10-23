'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import {
  DialogPanel as HeadlessDialogPanel,
  TransitionChild as HeadlessTransitionChild,
} from '@headlessui/react';

import { DialogPanelProps } from './DialogPanel.types';

const DialogPanelBase: React.FC<DialogPanelProps> = ({
  size = 'md',
  className,
  children,
}) => {
  return (
    <HeadlessTransitionChild
      enter={styles.enter}
      enterFrom={styles.enterFrom}
      enterTo={styles.enterTo}
      leave={styles.leave}
      leaveFrom={styles.leaveFrom}
      leaveTo={styles.leaveTo}
    >
      <HeadlessDialogPanel
        className={classNames(
          styles.panel,
          styles.size[size],
          styles.mobile,
          className,
        )}
      >
        {children}
      </HeadlessDialogPanel>
    </HeadlessTransitionChild>
  );
};

const styles = {
  panel: classes('p-3', 'overflow-auto', 'w-full', 'floating-panel'),
  size: {
    xs: classes('sm:max-w-md'),
    sm: classes('sm:max-w-xl'),
    md: classes('sm:max-w-3xl'),
    lg: classes('sm:max-w-5xl'),
    xl: classes('sm:max-w-7xl'),
    '2xl': classes('sm:max-w-[92dvw]'),
  },
  mobile: classes('max-w-[96vw]', 'max-h-[97dvh]'),
  enter: classes('transition', 'ease-out', 'duration-200'),
  enterFrom: classes('transform', 'opacity-0', 'scale-95'),
  enterTo: classes('transform', 'opacity-100', 'scale-100'),
  leave: classes('transition', 'ease-in', 'duration-100'),
  leaveFrom: classes('transform', 'opacity-100', 'scale-100'),
  leaveTo: classes('transform', 'opacity-0', 'scale-95'),
};

export const DialogPanel = DialogPanelBase;
