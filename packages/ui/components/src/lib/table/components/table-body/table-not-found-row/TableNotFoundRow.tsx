'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Feedback } from '../../../../feedback/components/Feedback';
import { NoDataIcon } from '../../../../icon/components/NoData';
import { TableNotFoundRowProps } from './TableNotFoundRow.types';

const TableNotFoundRowBase: React.FC<TableNotFoundRowProps> = ({
  colSpan,
  children,
  className,
}) => {
  return (
    <tr className={styles.tr}>
      <td colSpan={colSpan ?? 50} className={classNames(styles.td, className)}>
        {children ?? (
          <Feedback
            color="muted"
            title="Data not found"
            border={false}
            icon={<NoDataIcon />}
            className={styles.feedback}
          />
        )}
      </td>
    </tr>
  );
};

const styles = {
  tr: classes('w-full'),
  td: classes('w-full'),
  feedback: classes('h-40', 'rounded-none', 'items-center', 'justify-center'),
};

export const TableNotFoundRow = TableNotFoundRowBase;
