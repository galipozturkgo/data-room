'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Spinner } from '../spinner/Spinner';
import { LoadingProps } from './Loading.types';

const LoadingBase: React.FC<LoadingProps> = ({ spinner = {}, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Spinner {...spinner} />
    </div>
  );
};

const styles = {
  root: classes('w-full', 'h-full', 'flex', 'items-center', 'justify-center'),
};

export const Loading = LoadingBase;
