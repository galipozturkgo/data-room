'use client';

import { useElementRef, useTouchDirection } from '@dataroom/ui-hooks';
import { classes } from '@dataroom/ui-utils';
import { animated, useSpring } from '@react-spring/web';
import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useSnackbar } from '../../context/SnackbarContext';
import { SnackbarDismiss } from '../snackbar-dismiss/SnackbarDismiss';
import { SnackbarMessage } from '../snackbar-message/SnackbarMessage';
import { SnackMessage } from './Snackbar.types';

const SnackbarBase = () => {
  const { message, deleteMessage } = useSnackbar();
  const { ref, direction } = useTouchDirection<HTMLDivElement>();

  const [height, setHeight] = useState<number>(0);
  const [innerMessage, setInnerMessage] = useState<SnackMessage>();

  useEffect(() => {
    message && setInnerMessage(message);
  }, [message]);

  const [springs, api] = useSpring(() => ({
    opacity: 0,
    height: '0px',
  }));

  const conitaner = useElementRef<HTMLDivElement>((node) =>
    setHeight(node.clientHeight),
  );

  useEffect(() => {
    if (innerMessage) {
      api.start({
        opacity: 1,
        height: `${height}px`,
      });
    }
  }, [api, height, innerMessage]);

  const close = useCallback(() => {
    api.start({
      opacity: 0,
      height: '0px',
      onResolve: () => deleteMessage(),
    });
  }, [api, deleteMessage]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (message && message.autoDismiss) {
      timer = setTimeout(() => close(), message.dismissDelay);
    }

    return () => clearTimeout(timer);
  }, [close, message]);

  const handleTouchEnd = () => {
    if (message?.dismissible) {
      direction === 'bottom' && close();
    }
  };

  return ReactDOM.createPortal(
    <div ref={ref} className={styles.root} onTouchEnd={handleTouchEnd}>
      <animated.div style={springs} className={styles.container}>
        {message && (
          <div ref={conitaner} className={styles.content}>
            <SnackbarMessage
              item={message.item}
              color={message.color || 'blue'}
            />
            {message.dismissible && <SnackbarDismiss close={close} />}
          </div>
        )}
      </animated.div>
    </div>,
    document.body,
  );
};

const styles = {
  root: classes(
    'fixed',
    'z-[1700]',
    'overflow-hidden',
    'flex',
    'justify-center',
    'left-4',
    'right-4',
    'bottom-4',
    'sm:left-8',
    'sm:right-8',
    'sm:bottom-8',
    'pointer-events-none',
  ),
  container: classes(
    'text-sm',
    'relative',
    'touch-none',
    'pointer-events-auto',
    'floating-panel',
  ),
  content: classes('p-4', 'gap-3', 'flex', 'items-center justify-center'),
};

export const Snackbar = SnackbarBase;
