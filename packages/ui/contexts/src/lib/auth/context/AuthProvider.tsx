'use client';

import { AuthUser } from '@dataroom/shared-types';
import { useAuthUserQuery } from '@dataroom/ui-queries';
import { useEffect, useState } from 'react';

import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
  skipUser?: boolean;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  skipUser = false,
}) => {
  const { data, isLoading, error } = useAuthUserQuery(undefined, {
    skip: skipUser,
  });
  const [user, setUser] = useState<AuthUser | null | undefined>(undefined);

  useEffect(() => {
    if (!data) {
      return;
    }

    const { user } = data;

    setUser(user);
  }, [data]);

  useEffect(() => {
    if (!error) {
      return;
    }

    setUser(null);
  }, [error]);

  const login = (user: AuthUser | null) => setUser(user);

  const logout = () => setUser(undefined);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
