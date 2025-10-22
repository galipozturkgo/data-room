'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { useState } from 'react';
import React, { Fragment, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import { Floating } from '../../floating';
import { TooltipProps } from './Tooltip.types';

const TooltipBase: React.FC<TooltipProps> = ({
  title,
  open: isOpen = false,
  delay = 400,
  textWrap = true,
  floating = {},
  className,
  children,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hoverElement, setHoverElement] = useState<HTMLElement | null>(null);

  const { className: floatingClassName } = floating;

  useEffect(() => {
    setOpen(isOpen || false);
  }, [isOpen]);

  useEffect(() => {
    if (!hoverElement) {
      return;
    }

    const checkHover = (e: MouseEvent | TouchEvent) => {
      const mouseOver = hoverElement.contains(e.target as Node);
      if (!isHovering && mouseOver) {
        setIsHovering(true);
      }

      if (isHovering && !mouseOver) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousedown', checkHover);
    window.addEventListener('touchstart', checkHover);

    return () => {
      window.removeEventListener('mousedown', checkHover);
      window.removeEventListener('touchstart', checkHover);
    };
  }, [hoverElement]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isHovering) {
      timer = setTimeout(() => {
        setOpen(true);
      }, delay);
    } else {
      setOpen(false);
    }

    return () => timer && clearTimeout(timer);
  }, [isHovering, delay]);

  if (!title || title === '' || isMobile || children.props?.disabled) {
    return children;
  }

  return (
    <Fragment>
      {React.cloneElement(children, {
        ref: (el: HTMLElement) => setHoverElement(el),
        onFocus: (e: React.FocusEvent<HTMLDivElement, Element>) => {
          onFocus?.(e);
          setIsHovering(true);
        },
        onBlur: (e: React.FocusEvent<HTMLDivElement, Element>) => {
          onBlur?.(e);
          setIsHovering(false);
        },
        onMouseEnter: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          onMouseEnter?.(e);
          setIsHovering(true);
        },
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          onMouseLeave?.(e);
          setIsHovering(false);
        },
        ...props,
      })}
      <Floating
        reference={hoverElement}
        open={open}
        placement="bottom"
        className={classNames(styles.root, floatingClassName)}
        {...floating}
      >
        <div
          className={classNames(
            styles.title,
            textWrap && styles.textWrap,
            className,
          )}
        >
          {title}
        </div>
      </Floating>
    </Fragment>
  );
};

const styles = {
  root: classes('z-[1700]'),
  title: classes(
    'px-2',
    'py-1',
    'text-xs',
    'text-skin-inverted',
    'shadow-lg',
    'bg-skin-primary',
    'rounded-lg',
  ),
  textWrap: classes('whitespace-nowrap'),
};

export const Tooltip = React.memo(TooltipBase);
