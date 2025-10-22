'use client';

import { classes } from '@dataroom/ui-utils';

import { Button } from '../../../button/components/button/Button';
import { SyncIcon } from '../../../icon/components/Sync';
import { UndoIcon } from '../../../icon/components/Undo';
import { WentWrongProps } from './WentWrong.types';

const WentWrongBase: React.FC<WentWrongProps> = ({ onBack, onRefresh }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.code}>Something Went Wrong</div>
        <div className={styles.description}>
          Sorry we're having some technical issue. Please try to refresh or
          return home.
        </div>
        <div className={styles.buttons}>
          <Button
            color="accent"
            variant="contained"
            endIcon={<UndoIcon />}
            onClick={onBack}
          >
            Return Home
          </Button>

          <Button
            color="primary"
            variant="contained"
            endIcon={<SyncIcon />}
            onClick={onRefresh}
          >
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: classes(
    'p-6',
    'h-full',
    'gap-8',
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
  description: classes('text-skin-muted'),
  buttons: classes('flex', 'space-x-4'),
};

export const WentWrong = WentWrongBase;
