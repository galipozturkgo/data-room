'use client';

import { classes } from '@dataroom/ui-utils';

import { Button } from '../../../button/components/button/Button';
import { UndoIcon } from '../../../icon/components/Undo';
import { NotFoundProps } from './NotFound.types';

const NotFoundBase: React.FC<NotFoundProps> = ({ onBack }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.code}>404 - Page Not Found</div>
        <div className={styles.description}>
          This page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>

        <Button
          color="accent"
          variant="contained"
          endIcon={<UndoIcon />}
          onClick={onBack}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

const styles = {
  root: classes(
    'h-full',
    'p-6',
    'gap-6',
    'flex',
    'flex-col',
    'sm:flex-row',
    'items-center',
    'text-center',
    'justify-center',
  ),

  container: classes(
    'flex',
    'flex-col',
    'items-center',
    'sm:items-start',
    'justify-center',
    'space-y-4',
    'text-center',
    'sm:text-start',
  ),
  code: classes('text-4xl', 'md:text-6xl', 'font-bold'),
  error: classes('text-3xl', 'text-skin-accent'),
  description: classes('text-skin-muted'),
};

export const NotFound = NotFoundBase;
