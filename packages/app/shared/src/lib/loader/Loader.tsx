import {
  ErrorFallback,
  FullscreenLoading,
  NotificationProvider,
  SnackbarProvider,
} from '@dataroom/ui-components';
import { AuthProvider } from '@dataroom/ui-contexts';
import { appStore } from '@dataroom/ui-store';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NetworkStatus from '../network/NetworkStatus';
import { Router } from '../router/Router';
import { getRoutes } from '../router/Routes';

const Loader = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => navigate(path, { replace: true });

  return (
    <Provider store={appStore}>
      <ErrorBoundary
        FallbackComponent={(props) => (
          <ErrorFallback {...props} onNavigate={handleNavigation} />
        )}
      >
        <FullscreenLoading>
          <AuthProvider>
            <SnackbarProvider>
              <NotificationProvider>
                <NetworkStatus />
                <Router routes={getRoutes(handleNavigation)} />
              </NotificationProvider>
            </SnackbarProvider>
          </AuthProvider>
        </FullscreenLoading>
      </ErrorBoundary>
    </Provider>
  );
};

export default Loader;
