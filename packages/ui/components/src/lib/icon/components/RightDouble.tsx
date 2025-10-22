import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgRightDouble = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m12 7 1.763 1.747c1.406 1.394 2.109 2.09 2.217 2.94a2.5 2.5 0 0 1 0 .626c-.108.85-.811 1.546-2.217 2.94L12 17M7 7l1.763 1.747c1.406 1.394 2.109 2.09 2.217 2.94a2.5 2.5 0 0 1 0 .626c-.108.85-.811 1.546-2.217 2.94L7 17"
    />
  </svg>
);
const SvgRightDoubleForwardRef = forwardRef(SvgRightDouble);
const SvgRightDoubleWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgRightDoubleForwardRef
    ref={ref}
    className={classNames(size && styles.sizes[size], className)}
    {...props}
  />
);
const styles = {
  sizes: {
    xs: classes('w-2.5', 'h-2.5'),
    sm: classes('w-3.5', 'h-3.5'),
    base: classes('w-4.5', 'h-4.5'),
    md: classes('w-5.5', 'h-5.5'),
    lg: classes('w-6.5', 'h-6.5'),
  },
};
export const RightDoubleIcon = forwardRef(SvgRightDoubleWrapper);
