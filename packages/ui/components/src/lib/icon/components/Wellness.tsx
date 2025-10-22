import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgWellness = (
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
      strokeWidth={2}
      d="M8.99 10.21a6 6 0 0 1 .75-1.418l1.694-2.373a1 1 0 0 1 1.628 0l1.695 2.373a6 6 0 0 1 .745 1.404m-6.512.013a6 6 0 0 0 .75 5.558l1.694 2.373a1 1 0 0 0 1.628 0l1.695-2.373a6 6 0 0 0 .745-5.571m-6.512.013a6 6 0 0 0-1.948-.684l-2.877-.48a1 1 0 0 0-1.151 1.151l.48 2.877a6 6 0 0 0 4.931 4.932l2.877.48c.677.112.946.074.946.074s.24.038.917-.075l2.877-.48a6 6 0 0 0 4.932-4.931l.48-2.877a1 1 0 0 0-1.152-1.15l-2.877.479a6 6 0 0 0-1.923.67"
    />
  </svg>
);
const SvgWellnessForwardRef = forwardRef(SvgWellness);
const SvgWellnessWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgWellnessForwardRef
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
export const WellnessIcon = forwardRef(SvgWellnessWrapper);
