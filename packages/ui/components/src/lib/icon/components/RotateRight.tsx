import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgRotateRight = (
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
      d="M22 11.9a1 1 0 1 0-2 0zm-4.6-7.2-.6.8zm1.8 1.8-.8.6.041.054.048.048.711-.703Zm1.591-4.504a1 1 0 0 0-2 .008zM19.8 3.787l1-.004zM16.487 7.1l-.004 1zm-1.782-1.008a1 1 0 0 0-.01 2zm4.726.321.791.612zm-.319.32.612.79zm.17-.15.707.707zM20 11.9a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8v-2c-5.523 0-10 4.477-10 10zm8-8a7.96 7.96 0 0 1 4.8 1.6l1.202-1.6A9.96 9.96 0 0 0 12 1.9zm4.8 1.6a8 8 0 0 1 1.6 1.6L20 5.898a10 10 0 0 0-1.998-1.997L16.8 5.499Zm1.991-3.496.008 1.788 2-.01-.008-1.786zm-2.3 4.095-1.787-.008-.009 2 1.788.008.009-2ZM18.8 3.792c.003.736.004 1.203-.034 1.55-.036.328-.095.42-.124.458l1.581 1.224c.348-.449.476-.957.531-1.464.053-.487.05-1.088.046-1.777zm-2.316 4.307c.689.003 1.29.007 1.777-.046.507-.055 1.015-.183 1.464-.53L18.5 5.94c-.038.029-.13.088-.457.124-.348.038-.815.037-1.551.034l-.01 2ZM18.64 5.8a1 1 0 0 1-.066.075l1.414 1.414q.125-.124.233-.265zm-.066.075a1 1 0 0 1-.075.066l1.224 1.581a3 3 0 0 0 .265-.233zm-.086 1.327.082.083 1.422-1.406-.082-.083z"
    />
  </svg>
);
const SvgRotateRightForwardRef = forwardRef(SvgRotateRight);
const SvgRotateRightWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgRotateRightForwardRef
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
export const RotateRightIcon = forwardRef(SvgRotateRightWrapper);
