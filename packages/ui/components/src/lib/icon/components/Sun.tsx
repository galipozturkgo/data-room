import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2v1.818m0 16.364V22m10-10h-1.818M3.818 12H2m17.071-7.071-1.286 1.286m-11.57 11.57-1.286 1.286m14.142 0-1.286-1.286M6.215 6.215 4.929 4.929M17.454 12a5.454 5.454 0 1 1-10.908 0 5.454 5.454 0 0 1 10.909 0Z"
    />
  </svg>
);
const SvgSunForwardRef = forwardRef(SvgSun);
const SvgSunWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgSunForwardRef
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
export const SunIcon = forwardRef(SvgSunWrapper);
