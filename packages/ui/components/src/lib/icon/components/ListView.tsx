import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgListView = (
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
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7h15A1.5 1.5 0 0 0 21 5.5v-1A1.5 1.5 0 0 0 19.5 3Zm0 14h-15A1.5 1.5 0 0 0 3 18.5v1A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5Zm0-7h-15A1.5 1.5 0 0 0 3 11.5v1A1.5 1.5 0 0 0 4.5 14h15a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5Z"
    />
  </svg>
);
const SvgListViewForwardRef = forwardRef(SvgListView);
const SvgListViewWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgListViewForwardRef
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
export const ListViewIcon = forwardRef(SvgListViewWrapper);
