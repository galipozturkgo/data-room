'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Title } from '../../../typography/components/Title';
import { FormTitleProps } from './FormTitle.types';

const FormTitleBase: React.FC<FormTitleProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <Title
      title={title}
      as="h2"
      className={classNames(styles.title, className)}
    >
      {children}
    </Title>
  );
};

const styles = {
  title: classes('pb-2'),
};

export const FormTitle = FormTitleBase;
