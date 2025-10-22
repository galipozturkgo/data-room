import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgTextItalic = (
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
      fill="currentColor"
      d="M17 5a1 1 0 1 0 0-2zM9 3a1 1 0 1 0 0 2zm6 18a1 1 0 1 0 0-2zm-8-2a1 1 0 1 0 0 2zm6.992-14.876a1 1 0 1 0-1.984-.248zm-3.984 15.752a1 1 0 0 0 1.984.248zM17 3H9v2h8zm-2 16H7v2h8zM12.008 3.876l-2 16 1.984.248 2-16z"
    />
  </svg>
);
const SvgTextItalicForwardRef = forwardRef(SvgTextItalic);
const SvgTextItalicWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgTextItalicForwardRef
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
export const TextItalicIcon = forwardRef(SvgTextItalicWrapper);
