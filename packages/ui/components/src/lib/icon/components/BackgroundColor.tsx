import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgBackgroundColor = (
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
      d="M12.626 20.476c1.283-.203 2.344-1.264 4.465-3.385s3.182-3.182 3.385-4.465q.05-.312.05-.626H3.474a4 4 0 0 0 .05.626c.202 1.283 1.263 2.344 3.384 4.465s3.182 3.182 4.465 3.385c.415.066.837.066 1.252 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3.475 12a4 4 0 0 1 .05-.626c.202-1.283 1.263-2.344 3.384-4.465s3.182-3.182 4.465-3.385a4 4 0 0 1 1.252 0c1.283.203 2.344 1.264 4.465 3.385s3.182 3.182 3.385 4.465q.05.312.05.626M3.474 12a4 4 0 0 0 .05.626c.202 1.283 1.263 2.344 3.384 4.465s3.182 3.182 4.465 3.385c.415.066.837.066 1.252 0 1.283-.203 2.344-1.264 4.465-3.385s3.182-3.182 3.385-4.465q.05-.312.05-.626M3.474 12h17.05"
    />
    <path
      fill="currentColor"
      d="m21.5 15 1.538 3.692a1.667 1.667 0 1 1-3.077 0z"
    />
  </svg>
);
const SvgBackgroundColorForwardRef = forwardRef(SvgBackgroundColor);
const SvgBackgroundColorWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgBackgroundColorForwardRef
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
export const BackgroundColorIcon = forwardRef(SvgBackgroundColorWrapper);
