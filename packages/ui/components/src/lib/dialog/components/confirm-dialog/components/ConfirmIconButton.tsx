import { IconButton } from '../../../../button/components/icon-button/IconButton';
import { IconButtonProps } from '../../../../button/components/icon-button/IconButton.types';
import { TrashIcon } from '../../../../icon/components/Trash';
import { Tooltip } from '../../../../tooltip/components/Tooltip';

type Props = IconButtonProps & {
  kind: 'delete' | 'permanentlyDelete';
  tooltip?: false | string;
};

const ConfirmIconButtonBase: React.FC<Props> = ({
  kind,
  tooltip: tip,
  ...props
}) => {
  const config: { [keyof in Props['kind']]: Partial<Props> } = {
    delete: {
      icon: <TrashIcon />,
      color: 'red',
      variant: 'default',
      tooltip:
        typeof tip === 'boolean'
          ? undefined
          : typeof tip === 'string'
            ? tip
            : 'Delete',
    },
    permanentlyDelete: {
      icon: <TrashIcon />,
      color: 'red',
      variant: 'default',
      tooltip:
        typeof tip === 'boolean'
          ? undefined
          : typeof tip === 'string'
            ? tip
            : 'Permanently Delete',
    },
  };

  const { tooltip, ...restProps } = { ...config[kind] };

  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <IconButton {...restProps} {...props} />
      </Tooltip>
    );
  }

  return <IconButton {...restProps} {...props} />;
};

export const ConfirmIconButton = ConfirmIconButtonBase;
