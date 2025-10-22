import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="m9 20.5 2.673-4.729.345-.609m0 0c.316-.552.517-.881.718-1.128a5 5 0 0 1 6.775-.924c.34.242.72.62 1.474 1.375m-8.967.677L11.5 15c-1.195-.24-1.793-.359-2.342-.347a5 5 0 0 0-3.774 1.846c-.346.426-.62.971-1.164 2.062l-.11.22-.121.204m16.996-4.5C21 13.761 21 12.939 21 12c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939l.034.046m16.996-4.5c-.045 2.169-.224 3.469-.94 4.454a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.072-1.06M9 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </svg>
);
const SvgImageForwardRef = forwardRef(SvgImage);
const SvgImageWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgImageForwardRef
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
export const ImageIcon = forwardRef(SvgImageWrapper);
