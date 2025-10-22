import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBringForward = (
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
      d="m16.286 11.5 3.986 2.093a1 1 0 0 1-.017 1.78l-7.36 3.68a2 2 0 0 1-1.79 0l-7.36-3.68a1 1 0 0 1-.017-1.78L7.714 11.5m4.286 2v-8m0-.5 4 2m-4-2L8 7"
    />
  </svg>
);
const SvgBringForwardForwardRef = forwardRef(SvgBringForward);
const SvgBringForwardWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBringForwardForwardRef
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
export const BringForwardIcon = forwardRef(SvgBringForwardWrapper);
