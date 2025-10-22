import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgCardView = (
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
      d="M3 5.5v-1A1.5 1.5 0 0 1 4.5 3h1A1.5 1.5 0 0 1 7 4.5v1A1.5 1.5 0 0 1 5.5 7h-1A1.5 1.5 0 0 1 3 5.5Zm7 0v-1A1.5 1.5 0 0 1 11.5 3h1A1.5 1.5 0 0 1 14 4.5v1A1.5 1.5 0 0 1 12.5 7h-1A1.5 1.5 0 0 1 10 5.5Zm7 0v-1A1.5 1.5 0 0 1 18.5 3h1A1.5 1.5 0 0 1 21 4.5v1A1.5 1.5 0 0 1 19.5 7h-1A1.5 1.5 0 0 1 17 5.5Zm-14 7v-1A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5Zm7 0v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5Zm7 0v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5Zm-14 7v-1A1.5 1.5 0 0 1 4.5 17h1A1.5 1.5 0 0 1 7 18.5v1A1.5 1.5 0 0 1 5.5 21h-1A1.5 1.5 0 0 1 3 19.5Zm7 0v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5Zm7 0v-1a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5Z"
    />
  </svg>
);
const SvgCardViewForwardRef = forwardRef(SvgCardView);
const SvgCardViewWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgCardViewForwardRef
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
export const CardViewIcon = forwardRef(SvgCardViewWrapper);
