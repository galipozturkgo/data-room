'use client';

import { classes } from '@dataroom/ui-utils';
import {
  animated,
  config,
  SpringValue,
  useTransition,
} from '@react-spring/web';
import { useMemo } from 'react';

import { useNotification } from '../../context/NotificationContext';
import { NotificationContent } from '../notification-content/NotificationContent';
import { NotificationItem } from './Notification.types';

const DURATION = 6000;

const NotificationBase = () => {
  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);
  const { notifications, deleteNotification } = useNotification();

  const transitions = useTransition(notifications, {
    from: {
      opacity: 0,
      height: 0,
      life: '100%',
    },
    keys: (item) => item.key,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight,
      });
      await next({ life: '0%' });
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (_, __, item) => deleteNotification(item!.key),
    config: (item, _, phase) => (key) =>
      phase === 'enter' && key === 'life'
        ? { duration: item.duration || DURATION }
        : config.default,
  });

  const handleClose = (item: NotificationItem, life: SpringValue<string>) => {
    if (cancelMap.has(item) && life.get() !== '0%') {
      cancelMap.get(item)();
      cancelMap.delete(item);
    }
  };

  return (
    <div className={styles.root}>
      {transitions(({ life, ...style }, item) => (
        <animated.div className={styles.container} style={style}>
          <div
            ref={(ref: HTMLDivElement) => {
              if (ref) {
                refMap.set(item, ref);
              }
            }}
          >
            <NotificationContent
              item={item}
              close={() => handleClose(item, life)}
            />
            <animated.div className={styles.life} style={{ right: life }} />
          </div>
        </animated.div>
      ))}
    </div>
  );
};

const styles = {
  root: classes(
    'fixed',
    'z-[1700]',
    'flex',
    'flex-col',
    'items-end',
    'gap-3',
    'left-4',
    'right-4',
    'bottom-4',
    'sm:left-8',
    'sm:right-8',
    'sm:bottom-8',
    'pointer-events-none',
  ),
  container: classes(
    'relative',
    'overflow-hidden',
    'w-full',
    'sm:max-w-md',
    'floating-panel',
  ),
  life: classes(
    'absolute',
    'bottom-0',
    'left-0',
    'right-0',
    'h-1',
    'bg-skin-accent',
    'bg-gradient-to-r',
    'from-skin-primary',
    'via-transparent',
    'to-transparent',
  ),
};

export const Notification = NotificationBase;
