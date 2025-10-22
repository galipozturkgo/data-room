import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { AuthRouteProps } from './AuthRoute.types';

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading || user === undefined) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthRoute;
