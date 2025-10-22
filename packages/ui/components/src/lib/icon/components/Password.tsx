import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgPassword = (
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
      d="m6.455 21.755.309-.95zm-3.21-3.21.95-.309zm17.51 0-.95-.309zm-3.21 3.21-.309-.95zm0-13.51-.309.95zm3.21 3.21-.95.309.95-.31Zm-14.3-3.21.309.95zm-3.21 3.21.95.309-.95-.31ZM14.4 3.799a1 1 0 0 0 1.2-1.598zM10 9h4V7h-4zm4 12h-4v2h4zm-4 0c-1.94 0-2.672-.012-3.236-.196l-.618 1.902c.942.306 2.07.294 3.854.294zm-8-6c0 1.783-.012 2.912.294 3.854l1.902-.618C4.012 17.672 4 16.94 4 15zm4.764 5.804a4 4 0 0 1-2.568-2.568l-1.902.618a6 6 0 0 0 3.852 3.852zM20 15c0 1.94-.012 2.672-.196 3.236l1.902.618c.306-.942.294-2.07.294-3.854zm-6 8c1.783 0 2.912.012 3.854-.294l-.618-1.902C16.672 20.988 15.94 21 14 21zm5.804-4.764a4 4 0 0 1-2.568 2.568l.618 1.902a6 6 0 0 0 3.852-3.852zM14 9c1.94 0 2.672.012 3.236.196l.618-1.902C16.912 6.988 15.784 7 14 7zm8 6c0-1.783.012-2.912-.294-3.854l-1.902.618c.184.565.196 1.297.196 3.236zm-4.764-5.804a4 4 0 0 1 2.568 2.568l1.902-.618a6 6 0 0 0-3.852-3.852zM4 15c0-1.94.012-2.671.196-3.236l-1.902-.618C1.988 12.088 2 13.216 2 15zm2.146-7.706a6 6 0 0 0-3.852 3.852l1.902.618a4 4 0 0 1 2.568-2.568zM8 8V7H6v1zm4-7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4zm0 2c.902 0 1.731.297 2.4.8l1.2-1.6A5.98 5.98 0 0 0 12 1zM9 15a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1zm3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zm3-3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zm-3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm-2-5c-1.401 0-2.388-.003-3.166.128L7.166 9.1C7.738 9.003 8.518 9 10 9zm-3.166.128q-.355.058-.688.166l.618 1.902a3 3 0 0 1 .402-.096zM6 8v.114h2V8z"
    />
  </svg>
);
const SvgPasswordForwardRef = forwardRef(SvgPassword);
const SvgPasswordWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgPasswordForwardRef
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
export const PasswordIcon = forwardRef(SvgPasswordWrapper);
