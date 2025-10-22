'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { FieldLabelProps } from './FieldLabel.types';

const FieldLabelBase: React.FC<FieldLabelProps> = ({
  label,
  extraLabel,
  htmlFor,
  className,
}) => {
  if (!label && !extraLabel) {
    return null;
  }

  return (
    <div className={styles.root}>
      <label className={classNames(styles.label, className)} htmlFor={htmlFor}>
        {label}
      </label>
      {extraLabel}
    </div>
  );
};

const styles = {
  root: classes('flex', 'items-center', 'gap-1'),
  label: classes(
    'text-2xs',
    'font-sans',
    'text-skin-muted',
    'block',
    'py-1',
    'px-1',
    'truncate',
    'leading-4',
    'flex',
    'items-center',
    'gap-1.5',
  ),
};

export const FieldLabel = FieldLabelBase;
