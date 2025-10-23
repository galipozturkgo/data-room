'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { CaptionSearch } from './caption-filter/CaptionSearch';
import { CaptionRefresh } from './caption-refresh/CaptionRefresh';
import { CaptionTitle } from './caption-title/CaptionTitle';
import { TableCaptionProps } from './TableCaption.types';

const TableCaptionBase: React.FC<TableCaptionProps> = ({
  title,
  className,
  search = true,
  refresh,
  children,
  bottom,
}) => {
  return (
    <caption className={styles.root}>
      <div className={styles.container}>
        <div className={classNames(styles.head, className)}>
          <div className={styles.title}>
            {title && <CaptionTitle title={title} />}
            {refresh && <CaptionRefresh {...refresh} />}
          </div>
          {children}
        </div>
        {search && <CaptionSearch />}
      </div>
      {bottom}
    </caption>
  );
};

const styles = {
  root: classes('text-start', 'py-3', 'px-2'),
  title: classes('flex', 'items-center', 'space-x-3'),
  container: classes('flex', 'justify-between', 'items-end'),
  head: classes('flex', 'items-center', 'w-full', 'space-x-3'),
};

export const TableCaption = TableCaptionBase;
