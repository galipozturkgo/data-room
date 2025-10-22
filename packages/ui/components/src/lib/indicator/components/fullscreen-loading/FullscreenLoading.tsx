import { classes } from '@dataroom/ui-utils';
import { Suspense } from 'react';

import { Loading } from '../loading/Loading';
import { FullscreenLoadingProps } from './FullscreenLoading.types';

const FullScreen: React.FC = () => (
  <Loading className={styles.loading} spinner={{ size: 'lg' }} />
);

const FullscreenLoadingBase: React.FC<FullscreenLoadingProps> = ({
  isLoading,
  children,
}) => {
  return (
    <Suspense fallback={<FullScreen />}>
      {isLoading && <FullScreen />}
      {children}
    </Suspense>
  );
};

const styles = {
  loading: classes('z-[10000]', 'absolute', 'bg-skin-base', 'text-skin-accent'),
};

export const FullscreenLoading = FullscreenLoadingBase;
