import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgPrompt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.85 16.126 2.31-2.31-2.31-2.31m4.62 4.62h2.311m-1.158-9.175c-.497-.088-.497-.814 0-.902 1.803-.32 3.237-1.715 3.628-3.533l.03-.14c.108-.5.808-.502.92-.003l.036.162c.406 1.809 1.84 3.193 3.638 3.511.5.089.5.819 0 .907-1.798.319-3.232 1.703-3.638 3.512l-.036.162c-.112.5-.812.496-.92-.004l-.03-.14c-.391-1.817-1.825-3.213-3.628-3.532"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-4"
    />
  </svg>
);
const SvgPromptForwardRef = forwardRef(SvgPrompt);
const SvgPromptWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgPromptForwardRef
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
export const PromptIcon = forwardRef(SvgPromptWrapper);
