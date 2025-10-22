'use client';

import { ErrorCode } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';

import { NotFound } from '../not-found/NotFound';
import { WentWrong } from '../went-wrong/WentWrong';
import { ErrorFallbackProps } from './ErrorFallback.types';

const ErrorFallbackBase: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  onNavigate,
}) => {
  const backToHome = () => {
    resetErrorBoundary();
    onNavigate('/');
  };

  const handleRefresh = () => resetErrorBoundary();

  if (
    error &&
    isServerError(error) &&
    error.data.error?.code === ErrorCode.NotFoundError
  ) {
    return <NotFound onBack={backToHome} />;
  }

  return <WentWrong onBack={backToHome} onRefresh={handleRefresh} />;
};

export const ErrorFallback = ErrorFallbackBase;
