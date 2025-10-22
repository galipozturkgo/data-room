import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.04 16.56-4.856-4.871m8.254-8.21L3.476 15.378a1.615 1.615 0 0 0-.003 2.287l3.124 3.123a1.25 1.25 0 0 0 1.77-.003L20.528 8.568a1.593 1.593 0 0 0 0-2.258l-2.816-2.831a1.59 1.59 0 0 0-2.275 0ZM7.483 21.113h10.23"
    />
  </svg>
);
const SvgEraserForwardRef = forwardRef(SvgEraser);
const SvgEraserWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgEraserForwardRef
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
export const EraserIcon = forwardRef(SvgEraserWrapper);
