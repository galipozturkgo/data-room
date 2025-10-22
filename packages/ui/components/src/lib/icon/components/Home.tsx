import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.333 21H6a3 3 0 0 1-3-3V8.896a3 3 0 0 1 1.508-2.603l6-3.438a3 3 0 0 1 2.984 0l6 3.438A3 3 0 0 1 21 8.896V18a3 3 0 0 1-3 3h-3.333m-5.334 0v-5a2 2 0 0 1 2-2h1.334a2 2 0 0 1 2 2v5m-5.334 0h5.334"
    />
  </svg>
);
const SvgHomeForwardRef = forwardRef(SvgHome);
const SvgHomeWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgHomeForwardRef
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
export const HomeIcon = forwardRef(SvgHomeWrapper);
