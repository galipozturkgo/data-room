'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { useEffect, useState } from 'react';

import { CloseIcon } from '../../../icon/components/Close';
import { TickIcon } from '../../../icon/components/Tick';
import { Spinner } from '../spinner/Spinner';
import { UploadingProps, UploadStatus } from './Uploading.types';

const formatPercentage = (number: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);

export const UploadingBase: React.FC<UploadingProps> = ({
  progress,
  onlyPercentage = false,
  className,
}) => {
  const [value, setValue] = useState<UploadStatus | undefined>(progress);

  useEffect(() => {
    if (progress === 'success') {
      setTimeout(() => setValue(undefined), 1500);
    } else {
      setValue(progress);
    }
  }, [progress]);

  if (value === undefined) {
    return null;
  }

  const success = value === 1 || value === 'success';
  const loading = typeof value === 'number' && value !== 1;
  const failed = value === 'failed';
  const percentange = typeof value === 'number' && formatPercentage(value);

  return (
    <div
      className={classNames(
        styles.root,
        success && styles.success,
        failed && styles.error,
        className,
      )}
    >
      {loading && percentange && (
        <div className={styles.container}>
          <Spinner size="sm" className={styles.icon} />
          {!onlyPercentage && <span>Uploading</span>}
          <span>{percentange}</span>
        </div>
      )}

      {!loading && success && (
        <div className={styles.container}>
          {!onlyPercentage && <span>Loaded</span>}
          <TickIcon size="sm" className={styles.icon} />
        </div>
      )}

      {!loading && failed && (
        <div className={styles.container}>
          {!onlyPercentage && <span>Failed</span>}
          <CloseIcon size="sm" className={styles.icon} />
        </div>
      )}
    </div>
  );
};

const styles = {
  root: classes(
    'text-xs',
    'font-medium',
    'bg-skin-base',
    'text-skin-blue',
    'flex',
    'items-center',
    'justify-center',
    'px-2',
    'py-1',
    'rounded-lg',
    'border',
    'border-skin-silent',
  ),
  container: classes('flex', 'gap-1', 'justify-center', 'items-center'),
  success: classes('text-skin-green'),
  error: classes('text-skin-red'),
  icon: classes('inline'),
};

export const Uploading = UploadingBase;
