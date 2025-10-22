import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgShow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m20.442 13.875.813.583zm0-3.75-.812.584zM21.326 12h-1zM2.884 13.875l.812-.584zm0-3.75-.813-.583zM2 12H1zm.071 2.458c.875 1.218 2.182 2.827 3.785 4.14C7.45 19.9 9.44 21 11.663 21v-2c-1.563 0-3.113-.782-4.54-1.95-1.414-1.158-2.604-2.613-3.427-3.759zM11.663 21c2.224 0 4.214-1.099 5.807-2.402 1.603-1.313 2.91-2.922 3.785-4.14L19.63 13.29c-.823 1.146-2.012 2.6-3.427 3.76-1.427 1.167-2.977 1.95-4.54 1.95zm9.592-11.458c-.875-1.218-2.182-2.827-3.785-4.14C15.878 4.1 13.887 3 11.663 3v2c1.563 0 3.113.782 4.54 1.95 1.415 1.158 2.604 2.612 3.427 3.759zM11.663 3C9.44 3 7.45 4.099 5.856 5.402c-1.603 1.313-2.91 2.922-3.785 4.14l1.625 1.167c.823-1.147 2.013-2.6 3.427-3.76C8.55 5.783 10.1 5 11.663 5zm9.592 11.458c.543-.756 1.071-1.434 1.071-2.458h-2c0 .264-.06.406-.696 1.291zm-1.625-3.75c.636.886.696 1.028.696 1.292h2c0-1.024-.528-1.702-1.071-2.458L19.63 10.71ZM3.696 13.292C3.061 12.406 3 12.264 3 12H1c0 1.024.529 1.702 1.071 2.458zm-1.625-3.75C1.53 10.298 1 10.976 1 12h2c0-.264.06-.406.696-1.291zM7.663 12a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2zm4 4a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2zm4-4a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2zm-4-4a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2z"
    />
  </svg>
);
const SvgShowForwardRef = forwardRef(SvgShow);
const SvgShowWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgShowForwardRef
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
export const ShowIcon = forwardRef(SvgShowWrapper);
