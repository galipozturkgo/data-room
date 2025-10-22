import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgTextBold = (
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
      d="M13.625 11.5v1.25zm0-7.5v1.25zM6.75 5.5v6h2.5v-6zm0 6v6h2.5v-6zM8 12.75h5.625v-2.5H8zm5.625-1.25c0 1.25 0 1.25.002 1.25h.013l.072-.002a4 4 0 0 0 .623-.086 4.1 4.1 0 0 0 1.39-.59c1.093-.73 1.963-2.083 1.963-4.322h-2.5c0 1.51-.537 2.033-.85 2.241a1.6 1.6 0 0 1-.737.26h.013l.005-.001h.004c.001 0 .002 0 .002 1.25m4.063-3.75c0-2.239-.87-3.592-1.963-4.32-1.004-.67-2-.68-2.1-.68v2.5c-.1 0 .31-.01.713.259.313.209.85.73.85 2.241zm-4.063-5h-4.36v2.5h4.36zm-4.36 17.5h4.36v-2.5h-4.36zm4.36-1.25c0 1.25 0 1.25.002 1.25h.013l.072-.002a4 4 0 0 0 .623-.086 4.1 4.1 0 0 0 1.39-.59c1.093-.73 1.963-2.083 1.963-4.322h-2.5c0 1.51-.537 2.033-.85 2.241a1.6 1.6 0 0 1-.737.26h.013l.005-.001h.004c.001 0 .002 0 .002 1.25m4.063-3.75c0-2.24-.87-3.592-1.963-4.321a4.1 4.1 0 0 0-2.013-.677l-.072-.002h-.013c-.001 0-.002 0-.002 1.25s0 1.25-.002 1.25h-.022l.026.002a1.6 1.6 0 0 1 .71.257c.314.208.85.73.85 2.241h2.5ZM6.75 17.5c0 1.311.936 2.75 2.516 2.75v-2.5c.029 0 .053.008.067.015.012.006.007.006-.007-.01a.4.4 0 0 1-.076-.255zm2.5-12c0-.133.046-.219.076-.255.014-.016.019-.016.007-.01a.2.2 0 0 1-.067.015v-2.5c-1.58 0-2.516 1.439-2.516 2.75zm4.375 12.25v2.5zv2.5zm0-15v2.5z"
    />
  </svg>
);
const SvgTextBoldForwardRef = forwardRef(SvgTextBold);
const SvgTextBoldWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgTextBoldForwardRef
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
export const TextBoldIcon = forwardRef(SvgTextBoldWrapper);
