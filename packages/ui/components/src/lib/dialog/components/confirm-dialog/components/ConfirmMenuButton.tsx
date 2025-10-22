import { MenuButton } from '../../../../button/components/menu-button/MenuButton';
import { MenuButtonProps } from '../../../../button/components/menu-button/MenuButton.types';
import { TickSquareIcon } from '../../../../icon/components/TickSquare';
import { TrashIcon } from '../../../../icon/components/Trash';

type Props = MenuButtonProps & {
  kind: 'confirm' | 'delete' | 'permanentlyDelete';
};

const ConfirmMenuButtonBase: React.FC<Props> = ({
  kind,
  children,
  ...props
}) => {
  const config: { [keyof in Props['kind']]: Partial<Props> } = {
    confirm: {
      color: 'green',
      icon: <TickSquareIcon />,
      children: children || 'Confirm',
    },
    delete: {
      color: 'red',
      icon: <TrashIcon />,
      children: children || 'Delete',
    },
    permanentlyDelete: {
      color: 'red',
      icon: <TrashIcon />,
      children: children || 'Dermanently Delete',
    },
  };

  return <MenuButton {...config[kind]} {...props} />;
};

export const ConfirmMenuButton = ConfirmMenuButtonBase;
