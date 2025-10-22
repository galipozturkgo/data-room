'use client';

import { MiniIconButton } from '../../../../../button/components/mini-icon-button/MiniIconButton';
import { DownIcon } from '../../../../../icon/components/Down';
import { ListBoxAdornmentProps } from './ListBoxAdornment.types';

const ListBoxAdornmentBase: React.FC<ListBoxAdornmentProps> = ({
  disabled,
}) => {
  return (
    <MiniIconButton
      as="span"
      icon={<DownIcon />}
      color="muted"
      disabled={disabled}
    />
  );
};

export const ListBoxAdornment = ListBoxAdornmentBase;
