import { Button } from '../../../../button/components/button/Button';
import { ButtonProps } from '../../../../button/components/button/Button.types';
import { TrashIcon } from '../../../../icon/components/Trash';

type Props = ButtonProps & {
  kind: 'delete' | 'permanentlyDelete';
};

const ConfirmButtonBase: React.FC<Props> = ({ kind, children, ...props }) => {
  const config: { [keyof in Props['kind']]: Partial<Props> } = {
    delete: {
      color: 'red',
      variant: 'outlined',
      endIcon: <TrashIcon />,
      children: children || 'Delete',
    },
    permanentlyDelete: {
      color: 'red',
      variant: 'outlined',
      endIcon: <TrashIcon />,
      children: children || 'Permanently Delete',
    },
  };

  return <Button {...config[kind]} {...props} />;
};

export const ConfirmButton = ConfirmButtonBase;
