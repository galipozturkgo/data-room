'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import {
  PopoverBackdrop as HeadlessPopoverBackdrop,
  Transition as HeadlessTransitionChild,
} from '@headlessui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { usePopover } from '../popover-context/PopoverContext';
import { PopoverBackdropProps } from './PopoverBackdrop.types';

const PopoverBackdropBase: React.FC<PopoverBackdropProps> = ({
  portal = true,
  className,
  ...props
}) => {
  const { zIndex } = usePopover();

  const child = (
    <HeadlessTransitionChild
      as={HeadlessPopoverBackdrop}
      style={{ zIndex: zIndex - 1 }}
      className={classNames(styles.root, className)}
      enter={styles.enter}
      enterFrom={styles.enterFrom}
      enterTo={styles.enterTo}
      leave={styles.leave}
      leaveFrom={styles.leaveFrom}
      leaveTo={styles.leaveTo}
      onClick={(e: Event) => e.stopPropagation()}
      {...props}
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
  leaveFrom: classes('opacity-0'),
  leaveTo: classes('opacity-0'),
};

export const PopoverBackdrop = React.memo(PopoverBackdropBase);
