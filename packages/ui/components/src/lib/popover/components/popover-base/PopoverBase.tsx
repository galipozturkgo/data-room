'use client';

import {
  Popover as HeadlessPopover,
  PopoverButton as HeadlessPopoverButton,
  PopoverGroup as HeadlessPopoverGroup,
} from '@headlessui/react';
import React, { useCallback, useRef } from 'react';

import { PopoverBackdrop } from './popover-backdrop/PopoverBackdrop';
import { PopoverContent } from './popover-content/PopoverContent';
import { PopoverProvider } from './popover-context/PopoverProvider';
import { PopoverFooter } from './popover-footer/PopoverFooter';
import { PopoverPanel } from './popover-panel/PopoverPanel';
import { PopoverTitle } from './popover-title/PopoverTitle';
import { PopoverBaseProps } from './PopoverBase.types';

const PopoverBase = (
  {
    level = 0,
    children,
    reference,
    onKeyDown,
    onClose,
    ...props
  }: PopoverBaseProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const zIndex = 1600 + level * 10;
  const innerRef = useRef<HTMLDivElement | null>(null);

  const handleRef = useCallback(
    (el: HTMLDivElement) => {
      (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;

      if (ref) {
        if (typeof ref === 'function') {
          ref(el);
        } else {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        }
      }
    },
    [ref, innerRef],
  );

  const handleKeyDown = useCallback(
    () => (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);

      if ((e.ctrlKey || e.metaKey) && e.code === 'KeyV') {
        e.stopPropagation();
      }
    },
    [onKeyDown],
  );

  return (
    <HeadlessPopover
      as="div"
      ref={handleRef}
      onKeyDown={handleKeyDown}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {({ open, close }) => (
        <PopoverProvider
          open={open}
          close={close}
          zIndex={zIndex}
          onClose={onClose}
          reference={reference || innerRef.current}
        >
          {typeof children === 'function'
            ? children({ open, close })
            : children}
        </PopoverProvider>
      )}
    </HeadlessPopover>
  );
};

export const BasePopover = Object.assign(
  React.memo(React.forwardRef(PopoverBase)),
  {
    Title: PopoverTitle,
    Group: HeadlessPopoverGroup,
    Button: HeadlessPopoverButton,
    Panel: PopoverPanel,
    Content: PopoverContent,
    Backdrop: PopoverBackdrop,
    Footer: PopoverFooter,
  },
);
