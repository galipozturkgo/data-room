'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { Description as HeadlessDescription } from '@headlessui/react';

import { DialogDescriptionProps } from './DialogDescription.types';

const DialogDescriptionBase: React.FC<
  AtLeastOne<DialogDescriptionProps, 'description' | 'children'>
> = ({ description, children, className }) => {
  return (
    <HeadlessDescription className={classNames(styles.description, className)}>
      {children || description}
    </HeadlessDescription>
  );
};

const styles = {
  description: classes('p-1', 'text-sm', 'text-skin-muted'),
};

export const DialogDescription = DialogDescriptionBase;
