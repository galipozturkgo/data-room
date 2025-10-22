import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgStart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.544 6.558c3.132 1.786 4.698 2.679 5.223 3.845a3.88 3.88 0 0 1 0 3.194c-.525 1.166-2.091 2.059-5.223 3.845-3.132 1.785-4.698 2.678-5.983 2.545a3.99 3.99 0 0 1-2.802-1.597C4 17.357 4 15.57 4 12c0-3.572 0-5.357.76-6.39a3.99 3.99 0 0 1 2.8-1.597c1.286-.133 2.852.76 5.984 2.545Z"
    />
  </svg>
);
const SvgStartForwardRef = forwardRef(SvgStart);
const SvgStartWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgStartForwardRef
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
export const StartIcon = forwardRef(SvgStartWrapper);
