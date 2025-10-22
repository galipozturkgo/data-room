'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Direction = 'top' | 'bottom' | 'left' | 'right';

export const useTouchDirection = <T extends HTMLElement>(
  threshold?: number,
) => {
  const _threshold = threshold || 40;
  const nodeRef = useRef<T | null>(null);
  const [startPoint, setStartPoint] = useState<Touch | null>(null);
  const [endPoint, setEndPoint] = useState<Touch | null>(null);
  const [direction, setDirection] = useState<Direction | null>(null);

  const ref = useCallback((node: T) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      setStartPoint(event.touches[0]);
      setEndPoint(null);
    };

    const handleTouchMove = (event: TouchEvent) => {
      setEndPoint(event.touches[0]);
    };

    const handleTouchEnd = () => {
      if (startPoint && endPoint) {
        const diffX = startPoint.clientX - endPoint.clientX;
        const diffY = startPoint.clientY - endPoint.clientY;

        let dir: Direction | null = null;

        if (Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > _threshold) {
            dir = 'left';
          } else if (diffX < -_threshold) {
            dir = 'right';
          }
        } else {
          if (diffY > _threshold) {
            dir = 'top';
          } else if (diffY < -_threshold) {
            dir = 'bottom';
          }
        }

        setDirection(dir);
      } else {
        setDirection(null);
      }

      setStartPoint(null);
      setEndPoint(null);
    };

    const target = nodeRef.current;

    if (!target) {
      return;
    }

    target.addEventListener('touchstart', handleTouchStart as never, {
      passive: true,
    });
    target.addEventListener('touchmove', handleTouchMove as never, {
      passive: true,
    });
    target.addEventListener('touchend', handleTouchEnd as never, {
      passive: true,
    });

    return () => {
      target.removeEventListener('touchstart', handleTouchStart as never);
      target.removeEventListener('touchmove', handleTouchMove as never);
      target.removeEventListener('touchend', handleTouchEnd as never);
    };
  }, [nodeRef, startPoint, endPoint, _threshold]);

  return { ref, direction };
};
