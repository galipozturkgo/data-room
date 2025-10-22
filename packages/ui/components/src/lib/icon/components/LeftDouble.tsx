import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgLeftDouble = (
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
      d="m16 17-1.763-1.747c-1.406-1.394-2.109-2.09-2.217-2.94a2.5 2.5 0 0 1 0-.626c.108-.85.811-1.546 2.217-2.94L16 7m-5 10-1.763-1.747c-1.406-1.394-2.109-2.09-2.217-2.94a2.5 2.5 0 0 1 0-.626c.108-.85.811-1.546 2.217-2.94L11 7"
    />
  </svg>
);
const SvgLeftDoubleForwardRef = forwardRef(SvgLeftDouble);
const SvgLeftDoubleWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgLeftDoubleForwardRef
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
export const LeftDoubleIcon = forwardRef(SvgLeftDoubleWrapper);
