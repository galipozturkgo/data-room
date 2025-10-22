import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBulletList = (
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
      d="M8 14h11M8 18h11M8 6h11M8 10h11"
    />
    <circle cx={5} cy={6} r={1} fill="currentColor" />
    <circle cx={5} cy={10} r={1} fill="currentColor" />
    <circle cx={5} cy={14} r={1} fill="currentColor" />
    <circle cx={5} cy={18} r={1} fill="currentColor" />
  </svg>
);
const SvgBulletListForwardRef = forwardRef(SvgBulletList);
const SvgBulletListWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBulletListForwardRef
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
export const BulletListIcon = forwardRef(SvgBulletListWrapper);
