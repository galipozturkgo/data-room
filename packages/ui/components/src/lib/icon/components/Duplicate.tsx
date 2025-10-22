import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgDuplicate = (
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
      d="M7 11a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5h-5a5 5 0 0 1-5-5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.842 18.758A6 6 0 0 1 3 13.158V8a6 6 0 0 1 6-6h5.158a6 6 0 0 1 5.6 3.842h-2.232A4 4 0 0 0 14.158 4H9a4 4 0 0 0-4 4v5.158c0 1.414.734 2.657 1.842 3.368z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 13.5h9M14.5 18V9"
    />
  </svg>
);
const SvgDuplicateForwardRef = forwardRef(SvgDuplicate);
const SvgDuplicateWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgDuplicateForwardRef
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
export const DuplicateIcon = forwardRef(SvgDuplicateWrapper);
