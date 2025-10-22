import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M18.279 16.864a1 1 0 1 0-1.415 1.415zm2.014 4.843a1 1 0 0 0 1.414-1.414zm-3.429-3.428 3.429 3.428 1.414-1.414-3.428-3.429zm-6.15-.85A6.714 6.714 0 0 1 4 10.713H2a8.714 8.714 0 0 0 8.714 8.714v-2Zm6.714-6.715a6.714 6.714 0 0 1-6.714 6.714v2a8.714 8.714 0 0 0 8.714-8.714zM10.714 4a6.714 6.714 0 0 1 6.714 6.714h2A8.714 8.714 0 0 0 10.714 2zm0-2A8.714 8.714 0 0 0 2 10.714h2A6.714 6.714 0 0 1 10.714 4z"
    />
  </svg>
);
const SvgSearchForwardRef = forwardRef(SvgSearch);
const SvgSearchWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgSearchForwardRef
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
export const SearchIcon = forwardRef(SvgSearchWrapper);
