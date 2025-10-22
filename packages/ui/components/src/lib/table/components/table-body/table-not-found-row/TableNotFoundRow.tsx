'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Feedback } from '../../../../feedback/components/Feedback';
import { NoDataIcon } from '../../../../icon/components/NoData';
import { TableNotFoundRowProps } from './TableNotFoundRow.types';

const TableNotFoundRowBase: React.FC<TableNotFoundRowProps> = ({
  className,
}) => {
  return (
    <tr className={styles.tr}>
      <td colSpan={50} className={classNames(styles.td, className)}>
        <Feedback
          color="muted"
          title="Data not found"
          icon={<NoDataIcon />}
          className={styles.feedback}
        />
      </td>
    </tr>
  );
};

const styles = {
  tr: classes('w-full'),
  td: classes('bg-skin-silent'),
  feedback: classes('h-40', 'rounded-none', 'items-center', 'justify-center'),
};

export const TableNotFoundRow = TableNotFoundRowBase;
