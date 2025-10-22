import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgRainy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.813 18.23.693-1.384m5.538 1.384.692-1.384M10.236 21l.693-1.385M4.006 21l.692-1.385M16.467 21l.693-1.385m-.693-6.23a3.461 3.461 0 0 0 0-6.923 3.5 3.5 0 0 0-2.174.761 5.192 5.192 0 1 0-5.095 6.162h7.27Z"
    />
  </svg>
);
const SvgRainyForwardRef = forwardRef(SvgRainy);
const SvgRainyWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgRainyForwardRef
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
export const RainyIcon = forwardRef(SvgRainyWrapper);
