import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgGoogle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="#4285F4"
      d="M12 10.364v3.485h4.843a4.15 4.15 0 0 1-1.808 2.708l2.921 2.267c1.702-1.571 2.684-3.878 2.684-6.62q-.002-.956-.164-1.84z"
    />
    <path
      fill="#34A853"
      d="m6.956 13.713-.659.504-2.332 1.817C5.446 18.97 8.482 21 12 21c2.43 0 4.467-.802 5.956-2.176l-2.92-2.267c-.803.54-1.825.868-3.036.868-2.34 0-4.328-1.58-5.04-3.707z"
    />
    <path
      fill="#FBBC05"
      d="M3.965 7.967A8.9 8.9 0 0 0 3 12c0 1.457.352 2.823.965 4.034 0 .008 2.995-2.324 2.995-2.324A5.4 5.4 0 0 1 6.674 12c0-.597.106-1.17.286-1.71z"
    />
    <path
      fill="#EA4335"
      d="M12 6.584c1.325 0 2.504.458 3.444 1.341l2.578-2.577C16.459 3.892 14.43 3 12 3 8.482 3 5.446 5.02 3.965 7.966L6.96 10.29c.712-2.127 2.7-3.706 5.04-3.706"
    />
  </svg>
);
const SvgGoogleForwardRef = forwardRef(SvgGoogle);
const SvgGoogleWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgGoogleForwardRef
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
export const GoogleIcon = forwardRef(SvgGoogleWrapper);
