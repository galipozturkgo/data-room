import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgDottedMenu = (
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
    <rect
      width={4}
      height={4}
      x={3}
      y={10}
      stroke="currentColor"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={4}
      height={4}
      x={10}
      y={10}
      stroke="currentColor"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={4}
      height={4}
      x={17}
      y={10}
      stroke="currentColor"
      strokeWidth={2}
      rx={1}
    />
  </svg>
);
const SvgDottedMenuForwardRef = forwardRef(SvgDottedMenu);
const SvgDottedMenuWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgDottedMenuForwardRef
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
export const DottedMenuIcon = forwardRef(SvgDottedMenuWrapper);
