'use client';

import { BaseDialog } from '../dialog-base/DialogBase';
import { DialogBaseProps } from '../dialog-base/DialogBase.types';

const DialogBase: React.FC<DialogBaseProps> & {
  Panel: typeof BaseDialog.Panel;
  Title: typeof BaseDialog.Title;
  Description: typeof BaseDialog.Description;
  Footer: typeof BaseDialog.Footer;
  Backdrop: typeof BaseDialog.Backdrop;
} = (props) => <BaseDialog {...props} />;

DialogBase.Panel = BaseDialog.Panel;
DialogBase.Title = BaseDialog.Title;
DialogBase.Description = BaseDialog.Description;
DialogBase.Footer = BaseDialog.Footer;
DialogBase.Backdrop = BaseDialog.Backdrop;

export const Dialog = DialogBase;
