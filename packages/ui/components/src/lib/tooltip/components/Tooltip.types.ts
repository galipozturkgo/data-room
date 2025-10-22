import { FloatingProps } from '../../floating/Floating.types';

export type TooltipProps = Pick<
  React.ComponentPropsWithoutRef<'div'>,
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'className'
> & {
  title: string | React.JSX.Element;
  children: React.JSX.Element;
  open?: boolean;
  delay?: number;
  textWrap?: boolean;
  floating?: FloatingProps;
};
