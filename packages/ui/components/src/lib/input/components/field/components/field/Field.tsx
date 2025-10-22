'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { FieldError } from '../field-error/FieldError';
import { FieldLabel } from '../field-label/FieldLabel';
import { FieldProps } from './Field.types';

const FieldBase: React.FC<FieldProps> = ({
  label,
  extraLabel,
  htmlFor,
  children,
  className,
  error,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <FieldLabel label={label} extraLabel={extraLabel} htmlFor={htmlFor} />

      {children}

      {error && <FieldError error={error} label={label} />}
    </div>
  );
};

const styles = {
  root: classes('w-full'),
};

export const Field = FieldBase;
