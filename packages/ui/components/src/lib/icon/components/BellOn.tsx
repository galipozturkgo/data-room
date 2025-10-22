import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBellOn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.183 2.615A4.9 4.9 0 0 0 12.803 2H11.1a4.895 4.895 0 0 0-4.857 5.502l.079.635a3.65 3.65 0 0 1-1.147 3.136 3.65 3.65 0 0 0-.809 4.277l.104.213A3.97 3.97 0 0 0 8.04 18h8.221a3.812 3.812 0 0 0 2.594-6.605l-.044-.041a3.9 3.9 0 0 1-1.146-1.994M9.183 21l.3.4c1.35 1.8 4.05 1.8 5.4 0l.3-.4"
    />
    <path fill="currentColor" d="M19.183 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
);
const SvgBellOnForwardRef = forwardRef(SvgBellOn);
const SvgBellOnWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBellOnForwardRef
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
export const BellOnIcon = forwardRef(SvgBellOnWrapper);
