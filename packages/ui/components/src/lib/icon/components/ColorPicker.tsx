import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgColorPicker = (
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
      strokeWidth={2}
      d="m14.215 11.588-2.674 5.022a10 10 0 0 1-.27.49 5 5 0 0 1-.45.618c-.09.106-.188.207-.383.408-1.731 1.791-2.597 2.686-3.125 2.818a1.895 1.895 0 0 1-2.278-1.316c-.15-.522.192-1.72.877-4.115a10 10 0 0 1 .162-.535q.128-.362.31-.7c.068-.122.142-.24.29-.478l3.012-4.827M6.721 4.798a1.865 1.865 0 0 1 1.969-.64l.95.267c.536.15.804.225 1.075.223q.165-.002.329-.032c.266-.05.516-.177 1.017-.43 1.797-.91 2.695-1.364 3.439-1.122.214.07.414.177.59.317.614.486.73 1.476.965 3.456l.047.392c.064.544.097.816.2 1.063q.045.104.1.2c.132.233.328.424.72.807l.762.744a1.865 1.865 0 0 1-2.235 2.95L7.253 7.567a1.865 1.865 0 0 1-.532-2.77Z"
    />
  </svg>
);
const SvgColorPickerForwardRef = forwardRef(SvgColorPicker);
const SvgColorPickerWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgColorPickerForwardRef
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
export const ColorPickerIcon = forwardRef(SvgColorPickerWrapper);
