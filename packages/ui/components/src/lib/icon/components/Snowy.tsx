import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgSnowy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.23 3 12 5.77 14.77 3M3 14.77 5.77 12 3 9.23M14.77 21 12 18.23 9.23 21M21 9.23 18.23 12 21 14.77M7.154 7.154 9.23 9.23m0 5.54-2.076 2.076m9.692-9.692L14.77 9.23m0 5.54 2.076 2.076M12 5.77v12.46M5.77 12h12.46"
    />
  </svg>
);
const SvgSnowyForwardRef = forwardRef(SvgSnowy);
const SvgSnowyWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgSnowyForwardRef
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
export const SnowyIcon = forwardRef(SvgSnowyWrapper);
