import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgSunny = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 14.766a2.766 2.766 0 1 0 0-5.533 2.766 2.766 0 0 0 0 5.533M12 3v1.385m0 15.23V21m9-9h-1.385m-15.23 0H3m15.37-6.37-.984.984M6.614 17.386l-.983.983m12.739.001-.984-.984M6.614 6.614 5.63 5.63"
    />
  </svg>
);
const SvgSunnyForwardRef = forwardRef(SvgSunny);
const SvgSunnyWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgSunnyForwardRef
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
export const SunnyIcon = forwardRef(SvgSunnyWrapper);
