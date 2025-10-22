import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgResize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.795 14.894a3 3 0 0 0 2.07-2M14.5 15h2m0-13h-2M9 7.5v2m13-2v2M11.205 2.106a3 3 0 0 0-2.07 2m10.66-2a3 3 0 0 1 2.07 2M11.5 12.5 16 8m-4 0h4v4m-6.308 0H4.308A2.31 2.31 0 0 0 2 14.308v5.384A2.31 2.31 0 0 0 4.308 22h5.384A2.31 2.31 0 0 0 12 19.692v-5.384A2.31 2.31 0 0 0 9.692 12"
    />
  </svg>
);
const SvgResizeForwardRef = forwardRef(SvgResize);
const SvgResizeWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgResizeForwardRef
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
export const ResizeIcon = forwardRef(SvgResizeWrapper);
