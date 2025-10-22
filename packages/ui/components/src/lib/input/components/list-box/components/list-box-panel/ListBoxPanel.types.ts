import { FloatingProps } from '../../../../../floating/Floating.types';

type ListBoxPanelRenderProps = {
  open: boolean;
};

export type ListBoxPanelProps = {
  open: boolean;
  children?:
    | React.ReactNode
    | ((renderProps: ListBoxPanelRenderProps) => React.ReactNode);
  reference?: HTMLElement | null;
  className?: string;
  floating?: FloatingProps;
};
