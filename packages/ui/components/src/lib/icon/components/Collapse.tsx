import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgCollapse = (
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
      d="M3.5 7.5h3a1 1 0 0 0 1-1v-3m-1 3L3 3m.5 13.5h3a1 1 0 0 1 1 1v3m-1-3L3 21M20.5 7.5h-3a1 1 0 0 1-1-1v-3m1 3L21 3m-.5 13.5h-3a1 1 0 0 0-1 1v3m1-3L21 21"
    />
  </svg>
);
const SvgCollapseForwardRef = forwardRef(SvgCollapse);
const SvgCollapseWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgCollapseForwardRef
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
export const CollapseIcon = forwardRef(SvgCollapseWrapper);
