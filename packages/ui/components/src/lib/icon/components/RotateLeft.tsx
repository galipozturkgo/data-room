import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgRotateLeft = (
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
      d="M4 11.9a1 1 0 1 0-2 0zm2.6-7.2.6.8zM4.8 6.5l.74.672.031-.035L5.6 7.1zm.336-4.496a1 1 0 1 0-2-.008zM4.128 3.787l-1-.004zM7.44 7.1l.005 1zm1.792.992a1 1 0 0 0-.009-2l.01 2Zm-4.736-1.68-.79.612zm.32.32-.613.79zM2 11.9c0 5.523 4.477 10 10 10v-2a8 8 0 0 1-8-8zm10 10c5.523 0 10-4.477 10-10h-2a8 8 0 0 1-8 8zm10-10c0-5.523-4.477-10-10-10v2a8 8 0 0 1 8 8zm-10-10a9.96 9.96 0 0 0-6.002 2L7.2 5.5A7.96 7.96 0 0 1 12 3.9zm-6.002 2a10 10 0 0 0-1.997 1.998L5.599 7.1a8 8 0 0 1 1.6-1.6L6 3.9ZM3.136 1.997l-.008 1.787 2 .009.008-1.788zM7.445 8.1l1.787-.008-.009-2-1.787.008zM3.128 3.783c-.003.689-.007 1.29.046 1.777.056.507.183 1.015.531 1.464L5.287 5.8c-.03-.038-.089-.13-.124-.457-.038-.348-.038-.815-.035-1.551zm4.308 2.316c-.736.003-1.204.004-1.551-.034-.328-.036-.42-.095-.458-.124L4.203 7.522c.45.348.958.476 1.465.531.486.053 1.088.05 1.777.046zm-3.73.925q.135.177.298.329l1.367-1.46a1 1 0 0 1-.084-.093zm.298.329q.095.09.2.17L5.426 5.94l-.056-.048zm.056-1.527-.112.124 1.48 1.346.112-.124z"
    />
  </svg>
);
const SvgRotateLeftForwardRef = forwardRef(SvgRotateLeft);
const SvgRotateLeftWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgRotateLeftForwardRef
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
export const RotateLeftIcon = forwardRef(SvgRotateLeftWrapper);
