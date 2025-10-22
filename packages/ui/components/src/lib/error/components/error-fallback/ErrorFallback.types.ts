import { FallbackProps } from 'react-error-boundary';

export type ErrorFallbackProps = FallbackProps & {
  onNavigate: (path: string) => void;
};
