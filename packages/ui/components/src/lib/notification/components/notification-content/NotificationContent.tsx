'use client';

import { useTouchDirection } from '@dataroom/ui-hooks';
import { classes, classNames } from '@dataroom/ui-utils';

import { IconButton } from '../../../button/components/icon-button/IconButton';
import { CloseCircleIcon } from '../../../icon/components/CloseCircle';
import { InfoCircleIcon } from '../../../icon/components/InfoCircle';
import { NotificationContentProps } from './NotificationContent.types';

export const NotificationContent: React.FC<NotificationContentProps> = ({
  item,
  close,
}) => {
  const { ref, direction } = useTouchDirection<HTMLDivElement>();
  const { icon, color, title, content, description, dismissible } = item;

  const handleTouchEnd = () => {
    if (dismissible) {
      direction === 'bottom' && close();
    }
  };

  const handleDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    close();
  };

  return (
    <div ref={ref} className={styles.root} onTouchEnd={handleTouchEnd}>
      <div
        className={classNames(styles.header, styles.color[color || 'green'])}
      >
        <div className={styles.headerContent}>
          {icon ?? <InfoCircleIcon />}
          <p>{title}</p>
        </div>

        {dismissible && (
          <IconButton
            variant="text"
            icon={<CloseCircleIcon />}
            className={styles.iconButton}
            onClick={handleDismiss}
          />
        )}
      </div>

      {(content || description) && (
        <div className={styles.content}>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {typeof content === 'function' ? content({ close }) : content}
        </div>
      )}
    </div>
  );
};

const styles = {
  root: classes('p-3', 'space-y-3', 'pointer-events-auto'),
  header: classes('flex', 'items-start'),
  headerContent: classes(
    'flex',
    'space-x-3',
    'w-full',
    'items-center',
    'text-sm',
  ),
  iconButton: classes('p-0', 'pl-2'),
  content: classes('space-y-3'),
  description: classes('text-sm', 'font-light', 'text-skin-muted'),
  life: classes(
    'absolute',
    'bottom-0',
    'left-0',
    'right-0',
    'w-auto',
    'h-1',
    'bg-skin-accent',
    'bg-gradient-to-r',
    'from-skin-primary',
    'via-transparent',
    'to-transparent',
  ),
  color: {
    green: classes('text-skin-green'),
    red: classes('text-skin-red'),
    blue: classes('text-skin-blue'),
    orange: classes('text-skin-orange'),
  },
};
