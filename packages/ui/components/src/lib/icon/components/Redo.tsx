import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.71 12.29a1 1 0 0 0 1.408 1.42zm2.114-.688.704.71zm0-5.204.704-.71zm-.706-2.108a1 1 0 1 0-1.408 1.42zm2.48 4.96.992.127-.992-.126Zm0-.5.992-.127-.992.126ZM18 20a1 1 0 1 0 0-2zm-.882-6.29 1.41-1.398-1.407-1.42-1.41 1.398zm1.41-8.022-1.41-1.398-1.408 1.42 1.41 1.398zm0 6.624c.546-.54 1.016-1.005 1.352-1.423.349-.434.634-.914.71-1.512l-1.984-.253c-.01.082-.05.22-.285.513-.248.309-.621.681-1.2 1.255zm-1.407-5.204c.579.574.952.946 1.2 1.255.235.293.275.431.285.513l1.984-.253c-.076-.598-.361-1.078-.71-1.512-.336-.419-.806-.883-1.352-1.423zM19 8h-9v2h9zm-9 12h8v-2h-8zm-6-6a6 6 0 0 0 6 6v-2a4 4 0 0 1-4-4zm6-6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4zm10.59 1.377A3 3 0 0 0 20.614 9h-2a1 1 0 0 1-.008.124zM20.614 9a3 3 0 0 0-.024-.377l-1.984.253a1 1 0 0 1 .008.124zM19 10h.614V8H19z"
    />
  </svg>
);
const SvgRedoForwardRef = forwardRef(SvgRedo);
const SvgRedoWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgRedoForwardRef
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
export const RedoIcon = forwardRef(SvgRedoWrapper);
