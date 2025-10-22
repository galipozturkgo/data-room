'use client';

import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

export const useThemeDetector = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    isServer
      ? 'light'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
  );

  const mqListener = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isServer) {
      return;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    mql.addEventListener('change', mqListener);

    return () => mql.removeEventListener('change', () => null);
  }, []);

  return theme;
};
