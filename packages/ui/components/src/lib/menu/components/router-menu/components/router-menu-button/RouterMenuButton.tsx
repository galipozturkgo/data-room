'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { MenuButton } from '../../../../../button/components/menu-button/MenuButton';
import { RouterMenuButtonProps } from './RouterMenuButton.types';

const RouterMenuButtonBase: React.FC<RouterMenuButtonProps> = ({
  item,
  navigate,
  pathname,
  parent,
  className,
  ...props
}) => {
  const { title, icon, path, children } = item;
  const activePath = (parent && parent + '/' + path) || path!;
  const isActive = activePath === pathname;

  const handleClick = () =>
    !children && (parent ? navigate(activePath) : navigate(path!));

  const handleKeydown = (e: React.KeyboardEvent<HTMLAnchorElement>) =>
    e.code === 'Enter' && handleClick();

  const Icon =
    icon &&
    React.cloneElement(icon, {
      ...icon.props,
      className: classNames(styles.icon, icon.props.className),
    });

  return (
    <MenuButton
      variant="default"
      onClick={handleClick}
      onKeyDown={handleKeydown}
      color={isActive ? 'accent' : 'primary'}
      startIcon={Icon}
      tabIndex={0}
      text={title!}
      className={classNames(
        styles.root,
        isActive && styles.active,
        parent && styles.child,
        className,
      )}
      {...props}
    />
  );
};

const styles = {
  root: classes('p-1.5', 'w-full', 'justify-start'),
  active: classes(
    'bg-skin-silent',
    'hover:bg-skin-muted',
    'hover:active:bg-skin-muted',
  ),
  icon: classes('p-px'),
  child: classes('text-xs'),
};

export const RouterMenuButton = RouterMenuButtonBase;
