import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 12c0-3.333 0-5 .849-6.168.274-.377.606-.71.983-.983C7 4 8.667 4 12 4s5 0 6.168.849c.377.274.71.606.983.983C20 7 20 8.667 20 12s0 5-.849 6.168c-.274.377-.606.71-.983.983C17 20 15.333 20 12 20s-5 0-6.168-.849a4.4 4.4 0 0 1-.983-.983C4 17 4 15.333 4 12Z"
    />
  </svg>
);
const SvgStopForwardRef = forwardRef(SvgStop);
const SvgStopWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgStopForwardRef
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
export const StopIcon = forwardRef(SvgStopWrapper);
