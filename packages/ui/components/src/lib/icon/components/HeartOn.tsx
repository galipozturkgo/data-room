import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgHeartOn = (
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
      strokeLinecap="round"
      strokeWidth={2}
      d="M19 8.777a4.45 4.45 0 0 0-1.145-1.864A3.95 3.95 0 0 0 16.478 6m-6.079-1.854C8.726 3.084 6.023 2.08 3.69 4.46-1.852 10.11 7.649 21 12 21c4.35 0 13.852-10.889 8.311-16.54-2.334-2.38-5.037-1.376-6.71-.314-.946.6-2.256.6-3.202 0Z"
    />
  </svg>
);
const SvgHeartOnForwardRef = forwardRef(SvgHeartOn);
const SvgHeartOnWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgHeartOnForwardRef
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
export const HeartOnIcon = forwardRef(SvgHeartOnWrapper);
