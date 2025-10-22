import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgMeal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21.5c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.125 21 16.249 21 12.5H3c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106c1.314.955 3.19.955 6.939.955Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 12.5c.071-2.944.763-4.529 3.198-3.947.66.158 1.358-.257 1.58-.9C9.83 4.598 13.3 4.662 14.8 6.97c.503.774 1.884 1.19 2.747.863C19.212 7.2 19.5 9.5 19.5 9.5L20 12m-4-4.5L18.5 2"
    />
  </svg>
);
const SvgMealForwardRef = forwardRef(SvgMeal);
const SvgMealWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgMealForwardRef
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
export const MealIcon = forwardRef(SvgMealWrapper);
