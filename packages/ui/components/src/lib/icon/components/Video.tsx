import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.165 14.443V9.557c0-.564.657-.921 1.192-.647l4.764 2.443a.714.714 0 0 1 0 1.294l-4.764 2.443c-.535.274-1.192-.083-1.192-.647m-6.098-3.635a9 9 0 0 0 0 2.205m3.47-8.215a9 9 0 0 1 1.91-1.102M3.702 8.44a9 9 0 0 1 1.103-1.91"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.933 3c4.914 0 8.898 4.03 8.898 9s-3.984 9-8.898 9c-3.387 0-6.332-1.913-7.836-4.73"
    />
  </svg>
);
const SvgVideoForwardRef = forwardRef(SvgVideo);
const SvgVideoWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgVideoForwardRef
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
export const VideoIcon = forwardRef(SvgVideoWrapper);
