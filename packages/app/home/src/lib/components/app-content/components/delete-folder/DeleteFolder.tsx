import { useState } from 'react';

import { DeleteFolderProps } from './DeleteFolder.types';
import { ConfirmDialog } from '@dataroom/ui-components';
import { useDeleteFolderMutation } from '@dataroom/ui-queries';

const DeleteFolder: React.FC<DeleteFolderProps> = ({ id, name }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteFolder] = useDeleteFolderMutation();

  const handleConfirm = async () => await deleteFolder({ id });

  const handleSuccess = () => setOpen(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <ConfirmDialog
      open={open}
      confirm={`${name} will be deleted?`}
      description="If you delete folder, all sub folders and files will be deleted."
      color="red"
      onConfirm={handleConfirm}
      onSuccess={handleSuccess}
      onClose={handleClose}
    >
      <ConfirmDialog.IconButton
        kind="delete"
        variant="outlined"
        onClick={handleOpen}
      />
    </ConfirmDialog>
  );
};

export default DeleteFolder;
