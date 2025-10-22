import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m8.183 18 .4.686c1.8 3.085 5.4 3.085 7.2 0l.4-.686M4.366 15.55l.104.213A3.97 3.97 0 0 0 8.04 18h8.221a3.812 3.812 0 0 0 2.594-6.605l-.044-.041a3.88 3.88 0 0 1-1.21-3.328l.064-.517A4.9 4.9 0 0 0 12.803 2H11.1a4.895 4.895 0 0 0-4.857 5.502l.079.635a3.65 3.65 0 0 1-1.147 3.136 3.65 3.65 0 0 0-.809 4.277Z"
    />
  </svg>
);
const SvgBellForwardRef = forwardRef(SvgBell);
const SvgBellWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBellForwardRef
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
export const BellIcon = forwardRef(SvgBellWrapper);
