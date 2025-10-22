'use client';

import { Button } from '../../../../button/components/button/Button';
import { ButtonProps } from '../../../../button/components/button/Button.types';
import { SyncIcon } from '../../../../icon/components/Sync';

const CaptionRefreshBase: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      color="accent"
      variant="contained"
      startIcon={<SyncIcon />}
      {...props}
    >
      Refresh
    </Button>
  );
};

export const CaptionRefresh = CaptionRefreshBase;
