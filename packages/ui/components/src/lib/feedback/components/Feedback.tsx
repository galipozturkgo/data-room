'use client';

import { classes, classNames, COLORS } from '@dataroom/ui-utils';
import React from 'react';

import { InfoCircleIcon } from '../../icon/components/InfoCircle';
import { FeedbackProps } from './Feedback.types';

const FeedbackBase: React.FC<FeedbackProps> = ({
  title,
  description,
  color = 'green',
  icon,
  border = true,
  className,
  children,
}) => {
  const iconClassName = classNames(styles.icon, icon?.props.className);

  const Icon =
    icon &&
    React.cloneElement(icon, { ...icon.props, className: iconClassName });

  return (
    <div
      className={classNames(
        styles.root,
        COLORS.text.default[color],
        border && classNames(styles.border, COLORS.border[color]),
        className,
      )}
    >
      <div className={styles.header}>
        {Icon || <InfoCircleIcon className={iconClassName} />}
        <span className={styles.title}>{title}</span>
      </div>

      {(description || children) && (
        <div className={styles.container}>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {children && children}
        </div>
      )}
    </div>
  );
};

const styles = {
  root: classes(
    'p-4',
    'rounded-xl',
    'text-sm',
    'space-y-1',
    'flex',
    'flex-col',
  ),
  border: classes('border', 'border-opacity-50'),
  background: classes('bg-opacity-10'),
  icon: classes('flex-shrink-0'),
  header: classes('space-x-3', 'flex', 'items-center'),
  title: classes('align-middle', 'font-medium'),
  container: classes('ml-8', 'space-y-2'),
  description: classes('text-xs', 'text-skin-muted'),
};

export const Feedback = FeedbackBase;
