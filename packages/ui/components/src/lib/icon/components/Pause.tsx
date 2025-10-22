import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.889 4H16.11C14.975 4 14 4.9 14 6.077v11.846C14 19.1 14.975 20 16.111 20h2.778C20.025 20 21 19.1 21 17.923V6.077C21 4.9 20.025 4 18.889 4m-11 0H5.11C3.975 4 3 4.9 3 6.077v11.846C3 19.1 3.975 20 5.111 20H7.89c1.135 0 2.11-.9 2.11-2.077V6.077C10 4.9 9.025 4 7.889 4"
    />
  </svg>
);
const SvgPauseForwardRef = forwardRef(SvgPause);
const SvgPauseWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgPauseForwardRef
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
export const PauseIcon = forwardRef(SvgPauseWrapper);
