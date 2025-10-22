import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { NonAuthRouteProps } from './NonAuthRoute.types';

const NonAuthRoute: React.FC<NonAuthRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default NonAuthRoute;
