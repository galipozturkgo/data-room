'use client';

import { Fragment } from 'react';

import { MiniIconButton } from '../../../../../button/components/mini-icon-button/MiniIconButton';
import { DownIcon } from '../../../../../icon/components/Down';
import { BaseComboBox } from '../combo-box-base/ComboBoxBase';
import { ComboBoxAdornmentProps } from './ComboBoxAdornment.types';

const ComboBoxAdornmentBase: React.FC<ComboBoxAdornmentProps> = ({
  loading,
  disabled,
}) => {
  return (
    <BaseComboBox.Button as={Fragment}>
      <MiniIconButton
        as="span"
        color="muted"
        icon={<DownIcon />}
        loading={loading}
        disabled={disabled}
      />
    </BaseComboBox.Button>
  );
};

export const ComboBoxAdornment = ComboBoxAdornmentBase;
