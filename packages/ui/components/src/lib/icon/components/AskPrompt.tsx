import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgAskPrompt = (
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
      d="M13.917 13.343A6.2 6.2 0 0 1 12 14.813v2.076a.69.69 0 0 1-.693.692H7.154a.69.69 0 0 1-.693-.692v-2.077a6.231 6.231 0 0 1 5.336-11.259M6.461 21H12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.517 7.755c-.486-.085-.486-.782 0-.867a4.4 4.4 0 0 0 3.543-3.392l.029-.134c.105-.48.789-.483.898-.004l.036.156a4.42 4.42 0 0 0 3.552 3.372c.488.085.488.786 0 .87a4.42 4.42 0 0 0-3.552 3.373l-.036.156c-.11.48-.793.476-.898-.004l-.03-.134a4.4 4.4 0 0 0-3.542-3.392"
    />
  </svg>
);
const SvgAskPromptForwardRef = forwardRef(SvgAskPrompt);
const SvgAskPromptWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgAskPromptForwardRef
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
export const AskPromptIcon = forwardRef(SvgAskPromptWrapper);
