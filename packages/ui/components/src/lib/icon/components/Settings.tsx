import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgSettings = (
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
      d="m5.932 5.386-.243.97zm3.374-1.948-.961-.274zm-6.068 6.614.719-.696zm0 3.896-.718-.695zm2.694 4.666.243.97zm3.374 1.948-.961.274zm5.388 0 .961.274zm3.374-1.948.243-.97zm2.694-4.666-.719.696zm0-3.896-.719-.696zm-2.694-4.666-.243-.97zm-3.375-1.948.962-.274-.961.274ZM5.69 6.356a3.8 3.8 0 0 0 4.579-2.643l-1.923-.55a1.8 1.8 0 0 1-2.17 1.253zm-1.732 3c-1.26-1.302-.026-3.44 1.732-3l.486-1.94C2.465 3.486-.14 8 2.52 10.747l1.437-1.39Zm0 5.288a3.8 3.8 0 0 0 0-5.288L2.52 10.747a1.8 1.8 0 0 1 0 2.506l1.437 1.39Zm1.732 3c-1.758.44-2.992-1.698-1.732-3L2.52 13.253c-2.66 2.747-.054 7.26 3.655 6.33l-.486-1.94Zm4.579 2.644a3.8 3.8 0 0 0-4.58-2.644l.487 1.94a1.8 1.8 0 0 1 2.17 1.252zm3.464 0c-.497 1.742-2.967 1.742-3.464 0l-1.923.548c1.05 3.678 6.26 3.678 7.31 0zm4.58-2.644a3.8 3.8 0 0 0-4.58 2.644l1.923.548a1.8 1.8 0 0 1 2.17-1.252zm1.731-3c1.26 1.302.026 3.44-1.732 3l-.486 1.94c3.71.93 6.315-3.584 3.655-6.331zm0-5.288a3.8 3.8 0 0 0 0 5.288l1.437-1.391a1.8 1.8 0 0 1 0-2.506zm-1.732-3c1.758-.44 2.992 1.698 1.732 3l1.437 1.391c2.66-2.747.054-7.26-3.655-6.33zm-4.58-2.643a3.8 3.8 0 0 0 4.58 2.643l-.486-1.94a1.8 1.8 0 0 1-2.17-1.252l-1.923.549Zm1.924-.55c-1.05-3.677-6.26-3.677-7.31 0l1.923.55c.497-1.743 2.967-1.743 3.464 0zM8 12a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2zm4 4a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2zm4-4a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2zm-4-4a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2z"
    />
  </svg>
);
const SvgSettingsForwardRef = forwardRef(SvgSettings);
const SvgSettingsWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgSettingsForwardRef
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
export const SettingsIcon = forwardRef(SvgSettingsWrapper);
