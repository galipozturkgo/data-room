import { FloatingProps } from '../../../../../floating/Floating.types';

interface ComboBoxPanelRenderProps {
  open: boolean;
}

export interface ComboBoxPanelProps {
  open: boolean;
  children?:
    | React.ReactNode
    | ((props: ComboBoxPanelRenderProps) => React.ReactNode);
  reference?: HTMLElement | null;
  className?: string;
  floating?: FloatingProps;
}
