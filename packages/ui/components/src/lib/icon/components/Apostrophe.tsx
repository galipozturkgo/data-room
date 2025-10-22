import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgApostrophe = (
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
    <rect width={8} height={8} x={3} y={6} fill="currentColor" rx={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 18.8c3.84 0 5-3.2 5-4.8v-4"
    />
    <rect width={8} height={8} x={13} y={6} fill="currentColor" rx={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14 18.8c3.84 0 5-3.2 5-4.8v-4"
    />
  </svg>
);
const SvgApostropheForwardRef = forwardRef(SvgApostrophe);
const SvgApostropheWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgApostropheForwardRef
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
export const ApostropheIcon = forwardRef(SvgApostropheWrapper);
