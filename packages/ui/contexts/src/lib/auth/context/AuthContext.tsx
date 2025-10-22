'use client';

import { AuthUser } from '@dataroom/shared-types';
import { createContext, useContext } from 'react';

interface AuthContextProps {
  user: AuthUser | null | undefined;
  isLoading: boolean;
  login: (user: AuthUser | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
  login: () => null,
  logout: () => null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
