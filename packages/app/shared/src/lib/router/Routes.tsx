import { NotFound, RouterMenuItem } from '@dataroom/ui-components';
import { AuthRoute, NonAuthRoute } from '@dataroom/ui-contexts';
import { lazy } from 'react';

import FormLayout from '../outlet/FormOutlet';
import RouteLayout from '../outlet/RouteOutlet';

const Login = lazy(() =>
  import('@dataroom/app-login').then((module) => ({ default: module.Login })),
);

const Signup = lazy(() =>
  import('@dataroom/app-signup').then((module) => ({ default: module.Signup })),
);

const Home = lazy(() =>
  import('@dataroom/app-home').then((module) => ({ default: module.Home })),
);

export const getRoutes = (
  onBack?: (path: string) => void,
): RouterMenuItem[] => [
  {
    element: (
      <NonAuthRoute>
        <FormLayout />
      </NonAuthRoute>
    ),
    hidden: true,
    children: [
      {
        hidden: true,
        title: 'Log In',
        path: '/login',
        element: <Login />,
      },
      {
        hidden: true,
        title: 'Sign Up',
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    element: (
      <AuthRoute>
        <RouteLayout />
      </AuthRoute>
    ),
    hidden: true,
    children: [
      {
        index: true,
        path: '/',
        title: 'Home',
        element: <Home />,
      },
    ],
  },
  {
    hidden: true,
    title: 'Not Found',
    path: '*',
    element: <NotFound onBack={() => onBack?.('/')} />,
  },
];
