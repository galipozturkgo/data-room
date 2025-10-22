'use client';

import { useCallback, useRef } from 'react';

export const useElementRef = <T extends HTMLElement>(
  onMount?: (node: T) => void,
  onUnmount?: (node: T) => void,
) => {
  const nodeRef = useRef<T | null>(null);

  const ref = useCallback(
    (node: T) => {
      if (nodeRef.current) {
        onUnmount?.(nodeRef.current);
      }

      nodeRef.current = node;

      if (nodeRef.current) {
        onMount?.(nodeRef.current);
      }
    },
    [onMount, onUnmount],
  );

  return ref;
};
