import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.549 4.507c1.086-3.343 5.816-3.343 6.902 0a3.63 3.63 0 0 0 3.451 2.508c3.515 0 4.977 4.498 2.133 6.564a3.63 3.63 0 0 0-1.318 4.057c1.086 3.343-2.74 6.123-5.584 4.057a3.63 3.63 0 0 0-4.266 0c-2.844 2.066-6.67-.714-5.584-4.057a3.63 3.63 0 0 0-1.318-4.057C.12 11.513 1.583 7.015 5.098 7.015a3.63 3.63 0 0 0 3.45-2.508Z"
    />
  </svg>
);
const SvgStarForwardRef = forwardRef(SvgStar);
const SvgStarWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgStarForwardRef
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
export const StarIcon = forwardRef(SvgStarWrapper);
