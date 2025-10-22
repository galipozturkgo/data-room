'use client';

import { classes, classNames, COLORS } from '@dataroom/ui-utils';
import { useRef } from 'react';

import { IconButton } from '../../../../../button/components/icon-button/IconButton';
import { CloseCircleIcon } from '../../../../../icon/components/CloseCircle';
import { Title } from '../../../../../typography/components/Title';
import { useDialog } from '../../context/DialogContext';
import { DialogTitleProps } from './DialogTitle.types';

const DialogTitleBase: React.FC<DialogTitleProps> = ({
  title,
  color = 'primary',
  closeButtonVisible = true,
  closeButton = {},
  className,
  children,
}) => {
  const { onClose } = useDialog();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const {
    className: closeClassName,
    onClick: closeOnClick,
    ...closeButtonProps
  } = closeButton;

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (closeOnClick) {
      closeOnClick.constructor.name === 'AsyncFunction'
        ? await closeOnClick(event)
        : closeOnClick(event);
    }

    onClose?.();
  };

  return (
    <div
      className={classNames(styles.root, (title || children) && styles.justify)}
    >
      {(title || children) && (
        <Title
          as="h2"
          title={title}
          className={classNames(COLORS.text.default[color], className)}
        >
          {children}
        </Title>
      )}

      {closeButtonVisible && (
        <IconButton
          ref={buttonRef}
          variant="text"
          icon={<CloseCircleIcon />}
          onClick={handleClick}
          className={classNames(
            styles.button,
            closeClassName,
            !title && !children && styles.absolute,
          )}
          {...closeButtonProps}
        />
      )}
    </div>
  );
};

const styles = {
  root: classes('flex', 'items-start', 'justify-end'),
  justify: classes('justify-between', 'pb-2'),
  button: classes('p-0.5', 'ml-3', 'z-10'),
  absolute: classNames('absolute'),
};

export const DialogTitle = DialogTitleBase;
