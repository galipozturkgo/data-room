import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBringToForward = (
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
      d="m7.714 9.5-3.986 2.093a1 1 0 0 0 .017 1.78l7.36 3.68a2 2 0 0 0 1.79 0l7.36-3.68a1 1 0 0 0 .017-1.78L16.286 9.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m2 16.5 8.658 4.33a3 3 0 0 0 2.684 0L22 16.5m-10-5v-8m0-.5L8 5m4-2 4 2"
    />
  </svg>
);
const SvgBringToForwardForwardRef = forwardRef(SvgBringToForward);
const SvgBringToForwardWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBringToForwardForwardRef
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
export const BringToForwardIcon = forwardRef(SvgBringToForwardWrapper);
