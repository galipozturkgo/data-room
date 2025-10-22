'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import {
  DialogBackdrop as HeadlessDialogBackdrop,
  TransitionChild as HeadlessTransitionChild,
} from '@headlessui/react';
import ReactDOM from 'react-dom';

import { useDialog } from '../../context/DialogContext';
import { DialogBackdropProps } from './DialogBackdrop.types';

const DialogBackdropBase: React.FC<DialogBackdropProps> = ({
  portal = true,
  className,
}) => {
  const { zIndex } = useDialog();

  const child = (
    <HeadlessTransitionChild
      as={HeadlessDialogBackdrop}
      style={{ zIndex: zIndex - 1 }}
      className={classNames(styles.root, className)}
      enter={styles.enter}
      enterFrom={styles.enterFrom}
      enterTo={styles.enterTo}
      leave={styles.leave}
      leaveFrom={styles.leaveFrom}
      leaveTo={styles.leaveTo}
    />
  );

  return portal ? ReactDOM.createPortal(child, document.body) : child;
};

const styles = {
  root: classes('fixed', 'inset-0', 'bg-skin-white/40', 'backdrop-blur-[2px]'),
  enter: classes('duration-200'),
  enterFrom: classes('opacity-0'),
  enterTo: classes('opacity-100'),
  leave: classes('duration-150'),
  leaveFrom: classes('opacity-100'),
  leaveTo: classes('opacity-0'),
};

export const DialogBackdrop = DialogBackdropBase;
