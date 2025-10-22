import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.27 11.744.635.773zm-8.891.012.665-.747zm5.989 7.586-.578-.817zm-1.942 1.372.577.816-.577-.817ZM4.126 8.86l-.665.746zm15.665-.01-.635-.772zM16 8a1 1 0 1 0 0-2zM8 6a1 1 0 1 0 0 2zM6.472 4h11.112V2H6.472zm6.318 14.525-1.94 1.372 1.153 1.633 1.941-1.371zm-2.79.988v-4.177H8v4.177zM8.044 11.01 4.79 8.113 3.46 9.606l3.253 2.897 1.33-1.494Zm11.112-2.93-3.52 2.893 1.27 1.545 3.52-2.894-1.27-1.545ZM13.5 15.451v1.73h2v-1.73zm2.135-4.48a5.8 5.8 0 0 0-2.135 4.48h2c0-1.123.509-2.198 1.405-2.935zM10 15.336c0-1.652-.714-3.22-1.956-4.327l-1.33 1.494A3.8 3.8 0 0 1 8 15.336zm3.944 4.823a3.65 3.65 0 0 0 1.556-2.977h-2c0 .522-.257 1.024-.71 1.343zm-3.095-.262a.55.55 0 0 1-.571.042.46.46 0 0 1-.278-.426H8c0 2.078 2.375 3.167 4.003 2.017zM2 6.373a4.33 4.33 0 0 0 1.461 3.233l1.33-1.493A2.33 2.33 0 0 1 4 6.373zm18-.055a2.28 2.28 0 0 1-.844 1.76l1.27 1.545A4.28 4.28 0 0 0 22 6.318zM17.584 4C18.946 4 20 5.065 20 6.318h2C22 3.906 19.995 2 17.584 2zM6.472 2C4.03 2 2 3.93 2 6.373h2C4 5.09 5.08 4 6.472 4zM16 6H8v2h8z"
    />
  </svg>
);
const SvgFilterForwardRef = forwardRef(SvgFilter);
const SvgFilterWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgFilterForwardRef
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
export const FilterIcon = forwardRef(SvgFilterWrapper);
