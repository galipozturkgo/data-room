import { classes, classNames, IconProps } from '@dataroom/ui-utils';
import type { SVGProps } from 'react';
import { forwardRef, Ref } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.218 20.938-.157.988zm-4.156-4.156.987-.156zm17.876 0 .988.157zm-4.156 4.156.157.988zM20.8 10.4a1 1 0 1 0-1.6 1.202zm-16 1.202A1 1 0 0 0 3.2 10.4zM11 17a1 1 0 1 0 2 0zM7.216 6.379A1 1 0 1 0 8.784 7.62L7.216 6.38Zm2.182-1.142-.784-.621zm5.204 0 .784-.621zm.614 2.384a1 1 0 0 0 1.568-1.242L15.216 7.62ZM11.75 3.02l-.157-.988zm.502 0 .157-.988zM20 14v1h2v-1zm-5 6H9v2h6zM4 15v-1H2v1zm5 5c-.967 0-1.334-.003-1.626-.05l-.313 1.976C7.547 22.003 8.11 22 9 22zm-7-5c0 .89-.003 1.453.074 1.939l1.975-.313C4.003 16.334 4 15.967 4 15zm5.374 4.95a4 4 0 0 1-3.325-3.324l-1.975.313a6 6 0 0 0 4.987 4.987zM20 15c0 .967-.003 1.334-.05 1.626l1.976.313C22.003 16.453 22 15.89 22 15zm-5 7c.89 0 1.453.003 1.939-.074l-.313-1.975c-.292.046-.659.049-1.626.049zm4.95-5.374a4 4 0 0 1-3.324 3.325l.313 1.975a6 6 0 0 0 4.987-4.987zM22 14c0-1.35-.447-2.598-1.2-3.6l-1.6 1.2c.503.669.8 1.498.8 2.4zM4 14c0-.902.297-1.731.8-2.4l-1.6-1.2A5.98 5.98 0 0 0 2 14zm9 3V4h-2v13zM8.784 7.621l1.397-1.763-1.567-1.242-1.398 1.763L8.784 7.62Zm5.035-1.763 1.397 1.763 1.568-1.242-1.398-1.763zm-3.638 0c.573-.722.95-1.195 1.264-1.51.31-.311.433-.336.462-.34l-.315-1.976c-.651.104-1.146.485-1.564.904-.413.415-.872.996-1.414 1.68zm5.205-1.242c-.542-.684-1.001-1.265-1.414-1.68-.418-.42-.913-.8-1.564-.904l-.315 1.975c.029.005.152.03.462.34.314.316.691.79 1.264 1.511zm-3.48-.609A1 1 0 0 1 12 4V2q-.206 0-.408.032zM12 4q.046 0 .093.007l.315-1.975A2.6 2.6 0 0 0 12 2zm1 0V3h-2v1z"
    />
  </svg>
);
const SvgUploadForwardRef = forwardRef(SvgUpload);
const SvgUploadWrapper = (
  { size = 'base', className, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <SvgUploadForwardRef
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
export const UploadIcon = forwardRef(SvgUploadWrapper);
