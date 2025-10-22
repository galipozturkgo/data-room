'use client';

import { Spinner } from '../../../../../indicator/components/spinner/Spinner';
import { SpinnerProps } from '../../../../../indicator/components/spinner/Spinner.types';

const ButtonSpinnerBase: React.FC<SpinnerProps> = ({
  size = 'base',
  className,
}) => {
  return <Spinner size={size} className={className} />;
};

export const ButtonSpinner = ButtonSpinnerBase;
