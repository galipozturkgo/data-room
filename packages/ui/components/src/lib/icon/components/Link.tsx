import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 18a1 1 0 1 0 0-2zm8-2a1 1 0 1 0 0 2zm0-10a1 1 0 1 0 0 2zM8 8a1 1 0 0 0 0-2zm0 3a1 1 0 1 0 0 2zm8 2a1 1 0 1 0 0-2zm-8 3a4 4 0 0 1-4-4H2a6 6 0 0 0 6 6zm12-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zM8 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4zm0 7h8v-2H8z"
    />
  </svg>
);
const SvgLinkForwardRef = forwardRef(SvgLink);
const SvgLinkWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgLinkForwardRef
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
export const LinkIcon = forwardRef(SvgLinkWrapper);
