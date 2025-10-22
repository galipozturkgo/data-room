import {
  OffsetOptions,
  Placement,
  ShiftOptions,
  Strategy,
} from '@floating-ui/react';

export type FloatingProps = React.ComponentPropsWithoutRef<'div'> & {
  open?: boolean;
  onClose?: () => void;
  portal?: boolean;
  immediate?: boolean;
  reference?: HTMLElement | null;
  placement?: Placement;
  strategy?: Strategy;
  shift?: ShiftOptions;
  offset?: OffsetOptions;
  autoUpdate?: boolean;
  sameWidth?: boolean;
  dependencies?: unknown[];
};
