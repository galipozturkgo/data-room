import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 17v3a1 1 0 0 0 1 1h3M21 7V4a1 1 0 0 0-1-1h-3M3.47 20.47l4.25-4.25m8.5-8.5 4.25-4.25M21 17v3a1 1 0 0 1-1 1h-3M3 7V4a1 1 0 0 1 1-1h3m13.53 17.47-4.25-4.25m-8.5-8.5L3.53 3.47"
    />
  </svg>
);
const SvgExpandForwardRef = forwardRef(SvgExpand);
const SvgExpandWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgExpandForwardRef
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
export const ExpandIcon = forwardRef(SvgExpandWrapper);
