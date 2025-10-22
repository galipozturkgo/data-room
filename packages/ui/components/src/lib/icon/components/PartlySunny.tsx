import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgPartlySunny = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.538 14.077a3.48 3.48 0 0 0-2.077.692A6.23 6.23 0 1 0 9.231 21h8.307a3.462 3.462 0 0 0 0-6.923m.347-4.847a3.115 3.115 0 1 0 0-6.23 3.115 3.115 0 0 0 0 6.23"
    />
  </svg>
);
const SvgPartlySunnyForwardRef = forwardRef(SvgPartlySunny);
const SvgPartlySunnyWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgPartlySunnyForwardRef
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
export const PartlySunnyIcon = forwardRef(SvgPartlySunnyWrapper);
