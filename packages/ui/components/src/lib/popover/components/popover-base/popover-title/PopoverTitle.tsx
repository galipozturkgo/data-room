'use client';

import { classes, classNames, COLORS } from '@dataroom/ui-utils';

import { Title } from '../../../../typography/components/Title';
import { PopoverTitleProps } from './PopoverTitle.types';

const PopoverTitleBase: React.FC<PopoverTitleProps> = ({
  title,
  color = 'primary',
  className,
  children,
}) => {
  return (
    <Title
      as="h2"
      title={title}
      className={classNames(
        styles.title,
        COLORS.text.default[color],
        className,
      )}
    >
      {children}
    </Title>
  );
};

const styles = {
  title: classes('pb-2'),
};

export const PopoverTitle = PopoverTitleBase;
