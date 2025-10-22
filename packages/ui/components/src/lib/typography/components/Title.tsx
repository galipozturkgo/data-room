'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { TitleProps } from './Title.types';

export const TitleBase = <T extends React.ElementType = 'h1'>({
  as,
  title: _title,
  children,
  className,
  ...props
}: TitleProps<T>) => {
  const Component = as || 'h1';

  const { title, className: titleClassName } = _title
    ? typeof _title === 'string'
      ? { title: _title }
      : _title
    : {};

  return (
    <div
      className={classNames(
        styles.root,
        children && styles.children,
        className,
      )}
    >
      <Component
        className={classNames(styles.title, titleClassName)}
        {...props}
      >
        {title}
      </Component>

      {children}
    </div>
  );
};

const styles = {
  root: classes('w-full', 'text-skin-accent'),
  children: classes('flex', 'items-center', 'gap-1.5'),
  title: classes('pl-1', 'font-medium', 'text-lg'),
};

export const Title = TitleBase;
