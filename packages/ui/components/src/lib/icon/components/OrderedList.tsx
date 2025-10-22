import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgOrderedList = (
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
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 14h11M8 18h11M8 6h11M8 10h11"
    />
    <path
      fill="currentColor"
      d="M5.024 4.364V8h-.987V5.273h-.021l-.796.476V4.91l.895-.547h.91ZM3.241 12v-.71l1.357-1.122q.135-.112.23-.21a.8.8 0 0 0 .15-.204.5.5 0 0 0 .053-.233.45.45 0 0 0-.06-.24.4.4 0 0 0-.163-.152.5.5 0 0 0-.242-.055.5.5 0 0 0-.241.055.4.4 0 0 0-.16.161.55.55 0 0 0-.057.26H3.17q0-.384.173-.66.173-.278.486-.427.315-.15.737-.15.437 0 .756.141.322.14.496.39a1.07 1.07 0 0 1 .089 1.009q-.088.207-.313.457a6 6 0 0 1-.64.596l-.342.284v.022h1.42V12h-2.79Zm1.421 4.05a1.9 1.9 0 0 1-.764-.148 1.3 1.3 0 0 1-.522-.41 1 1 0 0 1-.191-.6h.994a.3.3 0 0 0 .064.188q.064.082.174.128.11.045.252.046a.6.6 0 0 0 .242-.048.4.4 0 0 0 .163-.136.34.34 0 0 0 .057-.2.3.3 0 0 0-.068-.195.44.44 0 0 0-.19-.133.8.8 0 0 0-.282-.048h-.37v-.681h.37a.7.7 0 0 0 .26-.048.4.4 0 0 0 .175-.134.3.3 0 0 0 .062-.195.33.33 0 0 0-.051-.188.36.36 0 0 0-.15-.128.58.58 0 0 0-.46.002.4.4 0 0 0-.165.133.34.34 0 0 0-.062.195h-.944q0-.333.183-.59a1.23 1.23 0 0 1 .5-.4 1.7 1.7 0 0 1 .73-.146q.403 0 .712.137.31.135.485.376.176.238.174.545a.64.64 0 0 1-.21.5.9.9 0 0 1-.536.232v.028q.44.048.662.27a.74.74 0 0 1 .219.554.9.9 0 0 1-.192.566 1.26 1.26 0 0 1-.534.387 2.1 2.1 0 0 1-.787.14Zm-1.456 3.382v-.767l1.463-2.301h.696v1.022h-.398l-.788 1.25v.029h2.16v.767zM4.974 20v-.803l.022-.333v-2.5h.923V20z"
    />
  </svg>
);
const SvgOrderedListForwardRef = forwardRef(SvgOrderedList);
const SvgOrderedListWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgOrderedListForwardRef
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
export const OrderedListIcon = forwardRef(SvgOrderedListWrapper);
