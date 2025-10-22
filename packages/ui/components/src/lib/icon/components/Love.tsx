import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgLove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0m6.923-8.76A9 9 0 0 1 12 3c.715 0 1.41.083 2.077.24M7.215 6.58c-1.373-1.686-2.824-.488-2.843.803 0 1.922 2.3 3.5 2.843 3.5s2.844-1.578 2.844-3.5c-.02-1.291-1.47-2.49-2.844-.804Zm9.569 0c1.374-1.686 2.824-.488 2.843.803 0 1.922-2.3 3.5-2.843 3.5s-2.843-1.578-2.843-3.5c.019-1.291 1.47-2.49 2.843-.804Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.43 13.385c.693 2.492 3.462 4.015 5.955 3.323 1.523-.554 2.769-1.8 3.184-3.323"
    />
  </svg>
);
const SvgLoveForwardRef = forwardRef(SvgLove);
const SvgLoveWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgLoveForwardRef
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
export const LoveIcon = forwardRef(SvgLoveWrapper);
