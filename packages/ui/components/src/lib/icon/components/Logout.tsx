import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14 3v1zm1 0V2zm6 6h1zm0 6h-1zm-6 6v1zm-1 0v-1zm6.938-4.218.988.157zm-4.156 4.156-.156-.987zm0-17.876.157-.988zm4.156 4.156.988-.157zM10.4 3.2a1 1 0 0 0 1.202 1.6zm1.202 16a1 1 0 0 0-1.202 1.6zM3 11a1 1 0 1 0 0 2zm13 1v-1zm-3.621 3.216a1 1 0 0 0 1.242 1.568zm2.384-.614-.621-.783zm0-5.204-.621.783zm-1.142-2.182a1 1 0 0 0-1.242 1.568zm3.36 5.035.987.157-.988-.157Zm0-.502.987-.157-.988.157ZM14 4h1V2h-1zm6 5v6h2V9zm-5 11h-1v2h1zm5-5c0 .967-.003 1.334-.05 1.626l1.976.313C22.003 16.453 22 15.89 22 15zm-5 7c.89 0 1.453.003 1.939-.074l-.313-1.975c-.292.046-.659.049-1.626.049zm4.95-5.374a4 4 0 0 1-3.324 3.325l.313 1.975a6 6 0 0 0 4.987-4.987zM15 4c.967 0 1.334.003 1.626.05l.313-1.976C16.453 1.997 15.89 2 15 2zm7 5c0-.89.003-1.453-.074-1.939l-1.975.313c.046.292.049.659.049 1.626zm-5.374-4.95a4 4 0 0 1 3.325 3.324l1.975-.313a6 6 0 0 0-4.987-4.987l-.313 1.975ZM14 2c-1.35 0-2.598.447-3.6 1.2l1.2 1.6A3.98 3.98 0 0 1 14 4zm0 18a3.98 3.98 0 0 1-2.4-.8l-1.2 1.6A5.98 5.98 0 0 0 14 22zM3 13h13v-2H3zm10.621 3.784 1.763-1.398-1.242-1.567-1.763 1.397zm1.763-8.17-1.763-1.398-1.242 1.568 1.763 1.397zm0 6.772c.684-.542 1.265-1.001 1.68-1.414.42-.418.8-.913.904-1.564l-1.975-.315c-.005.029-.03.152-.34.462-.316.314-.79.691-1.511 1.264zm-1.242-5.205c.722.573 1.195.95 1.51 1.264.311.31.336.433.34.462l1.976-.315c-.104-.651-.485-1.146-.904-1.564-.415-.413-.996-.872-1.68-1.414zm3.826 2.227A3 3 0 0 0 18 12h-2q0 .046-.007.093zM18 12q0-.206-.032-.408l-1.975.315A1 1 0 0 1 16 12zm-2 1h1v-2h-1z"
    />
  </svg>
);
const SvgLogoutForwardRef = forwardRef(SvgLogout);
const SvgLogoutWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgLogoutForwardRef
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
export const LogoutIcon = forwardRef(SvgLogoutWrapper);
