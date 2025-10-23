import { useState } from 'react';

import { DeleteFileProps } from './DeleteFile.types';
import { ConfirmDialog } from '@dataroom/ui-components';
import { useDeleteFileMutation } from '@dataroom/ui-queries';

const DeleteFile: React.FC<DeleteFileProps> = ({ url, name }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteFile] = useDeleteFileMutation();

  const handleConfirm = async () => await deleteFile({ key: url });

  const handleSuccess = () => setOpen(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <ConfirmDialog
      open={open}
      confirm={`${name} will be deleted?`}
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

export default DeleteFile;
