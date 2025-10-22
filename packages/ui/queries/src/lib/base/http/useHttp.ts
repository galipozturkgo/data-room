'use client';

import { getEnv } from '@dataroom/ui-utils';
import { useEffect, useRef, useState } from 'react';

import { httpClient } from './client/HttpClient';

export const useHttp = () => {
  const url = getEnv('API_URL');
  const ref = useRef(true);
  const [client, setClient] = useState(httpClient(url));

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {
      setClient(httpClient(url));
    }

    return () => client.unmount();
  }, []);

  return client;
};
