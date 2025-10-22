'use client';

import {
  Dialog as HeadlessDialog,
  Transition as HeadlessTransition,
} from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';
import { Fragment } from 'react';

import { DialogBackdrop } from './components/dialog-backdrop/DialogBackdrop';
import { DialogDescription } from './components/dialog-description/DialogDescription';
import { DialogFooter } from './components/dialog-footer/DialogFooter';
import { DialogPanel } from './components/dialog-panel/DialogPanel';
import { DialogTitle } from './components/dialog-title/DialogTitle';
import { DialogProvider } from './context/DialogProvider';
import { DialogBaseProps } from './DialogBase.types';

const BaseDialogBase: React.FC<DialogBaseProps> & {
  Panel: typeof DialogPanel;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Footer: typeof DialogFooter;
  Backdrop: typeof DialogBackdrop;
} = ({ open, onClose, children, level = 0, className, style, ...props }) => {
  const handleClose = () => onClose?.();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Escape') {
      e.stopPropagation();
      onClose?.();
    }
  };

  const zIndex = 1600 + level * 10;

  return (
    <DialogProvider onClose={handleClose} zIndex={zIndex}>
      <HeadlessTransition appear show={open || false} as={Fragment}>
        <HeadlessDialog
          as="div"
          onClose={handleClose}
          onKeyDown={handleKeyDown}
          className={classNames(styles.root, className)}
          style={{ zIndex, ...style }}
          {...props}
        >
          {children}
        </HeadlessDialog>
      </HeadlessTransition>
    </DialogProvider>
  );
};

BaseDialogBase.Panel = DialogPanel;
BaseDialogBase.Title = DialogTitle;
BaseDialogBase.Description = DialogDescription;
BaseDialogBase.Footer = DialogFooter;
BaseDialogBase.Backdrop = DialogBackdrop;

const styles = {
  root: classes(
    'p-3',
    'fixed',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
  ),
};

export const BaseDialog = BaseDialogBase;
