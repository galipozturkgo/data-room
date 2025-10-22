import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgPenDraw = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 13.1c1.11-1.553 4.476-5.964 8.416-8.445 2.962-1.865 5.76.597 3.59 3.077-2.121 2.426-4.967 5.764-6.181 7.422-1.26 1.718.896 3.795 3.052 1.817 1.441-1.321 2.943-2.841 4.47-3.964 2.06-1.516 3.827-.178 2.928 1.531-.65 1.235-1.121 1.78-1.664 2.82s.031 2.285.854 2.392c1.02.133 1.664-.598 2.535-1.737"
    />
  </svg>
);
const SvgPenDrawForwardRef = forwardRef(SvgPenDraw);
const SvgPenDrawWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgPenDrawForwardRef
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
export const PenDrawIcon = forwardRef(SvgPenDrawWrapper);
