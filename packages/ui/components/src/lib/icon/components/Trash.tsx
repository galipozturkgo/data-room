import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m18.517 12.78.99.137zm-.262 1.885.99.137zm-12.51 0 .99-.138zm-.262-1.885-.99.137zm3.7 8.957-.388.921zM6.476 18.56l.939-.345zm11.05 0 .939.345-.94-.345Zm-2.709 3.177-.388-.921zM5.996 8.905a1 1 0 0 0-1.992.19zm14 .19a1 1 0 1 0-1.991-.19zM20 8a1 1 0 1 0 0-2zM4 6a1 1 0 0 0 0 2zm5 12a1 1 0 1 0 2 0zm2-8a1 1 0 1 0-2 0zm2 8a1 1 0 1 0 2 0zm2-8a1 1 0 1 0-2 0zm1-3v1h1V7zM8 7H7v1h1zm9.527 5.642-.263 1.885 1.981.275.263-1.885zM6.736 14.527l-.263-1.885-1.98.275.262 1.885zM12 21c-1.552 0-2.035-.019-2.428-.184l-.777 1.842c.855.36 1.833.342 3.205.342zm-7.245-6.198c.278 1.997.433 3.154.781 4.103l1.878-.69c-.256-.696-.386-1.588-.678-3.688zm4.817 6.014c-.84-.355-1.659-1.241-2.158-2.6l-1.878.69c.631 1.717 1.768 3.123 3.259 3.752l.777-1.843Zm7.692-6.29c-.292 2.101-.422 2.993-.678 3.69l1.878.69c.348-.95.503-2.107.781-4.104l-1.98-.275ZM12 23c1.372 0 2.35.019 3.205-.342l-.777-1.843c-.393.166-.876.185-2.428.185zm4.586-4.785c-.5 1.36-1.317 2.245-2.158 2.6l.777 1.843c1.491-.63 2.627-2.035 3.259-3.753zM6.473 12.642c-.222-1.599-.387-2.785-.477-3.737l-1.992.19c.096 1.004.268 2.241.488 3.822zm13.035.275c.22-1.58.392-2.818.488-3.822l-1.991-.19c-.09.952-.256 2.138-.478 3.737l1.98.275ZM20 6H4v2h16zm-9 12v-8H9v8zm4 0v-8h-2v8zm0-12v1h2V6zm1 0H8v2h8zM9 7V6H7v1zm3-4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm0-2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3z"
    />
  </svg>
);
const SvgTrashForwardRef = forwardRef(SvgTrash);
const SvgTrashWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgTrashForwardRef
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
export const TrashIcon = forwardRef(SvgTrashWrapper);
