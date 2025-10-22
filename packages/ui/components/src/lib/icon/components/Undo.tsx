import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 9v1zm1 9a1 1 0 1 0 0 2zm.496-4.29a1 1 0 0 0 1.408-1.42zm-.706-2.108-.704.71zm0-5.204-.704-.71zm2.114-.688a1 1 0 0 0-1.408-1.42zM4.016 9.25l-.992.127.992-.126Zm0-.5-.992-.127.992.126ZM5 10h9V8H5zm9 8H6v2h8zm4-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zm-6.096 2.29-1.41-1.398-1.408 1.42 1.41 1.398zm-1.41-5.182 1.41-1.398-1.408-1.42-1.41 1.398zm0 3.784c-.58-.574-.953-.946-1.2-1.255-.236-.293-.276-.431-.286-.513l-1.984.253c.076.598.361 1.078.71 1.512.336.418.806.883 1.352 1.423zM5.086 5.688c-.546.54-1.016 1.004-1.352 1.423-.349.434-.634.914-.71 1.512l1.984.253c.01-.082.05-.22.285-.513.248-.309.621-.681 1.2-1.255zm-.078 3.436A1 1 0 0 1 5 9H3q0 .19.024.377zM5 9q0-.062.008-.124l-1.984-.253A3 3 0 0 0 3 9zm0-1H4v2h1z"
    />
  </svg>
);
const SvgUndoForwardRef = forwardRef(SvgUndo);
const SvgUndoWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgUndoForwardRef
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
export const UndoIcon = forwardRef(SvgUndoWrapper);
