import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgEditPrompt = (
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
      d="m11.817 20.59-4.167.362.36-4.167 8.668-8.613a1.39 1.39 0 0 1 1.987 0l1.764 1.778a1.39 1.39 0 0 1 0 1.973zM3.366 7.77c-.488-.085-.488-.785 0-.87A4.41 4.41 0 0 0 6.92 3.498l.029-.134c.105-.482.791-.485.901-.004l.036.156a4.435 4.435 0 0 0 3.563 3.383c.49.086.49.789 0 .874a4.435 4.435 0 0 0-3.563 3.383l-.036.157c-.11.48-.796.478-.901-.004l-.03-.134A4.41 4.41 0 0 0 3.367 7.77Z"
    />
  </svg>
);
const SvgEditPromptForwardRef = forwardRef(SvgEditPrompt);
const SvgEditPromptWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgEditPromptForwardRef
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
export const EditPromptIcon = forwardRef(SvgEditPromptWrapper);
