import { Fragment, useState } from 'react';
import { PreviewFileProps } from './PreviewFile.types';
import {
  Dialog,
  IconButton,
  SearchIcon,
  Tooltip,
} from '@dataroom/ui-components';

const PreviewFile: React.FC<PreviewFileProps> = ({ signed, name }) => {
  const [open, setOpen] = useState<boolean>();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Tooltip title="Preview">
        <IconButton
          color="green"
          variant="outlined"
          icon={<SearchIcon />}
          onClick={handleOpen}
        />
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <Dialog.Backdrop />

        <Dialog.Panel size="2xl" className="h-[80vh]">
          <Dialog.Title title={name} />

          <iframe
            src={signed}
            width="100%"
            height="auto"
            style={{ border: 'none', height: '74vh' }}
            title="PDF Preview"
          />
        </Dialog.Panel>
      </Dialog>
    </Fragment>
  );
};

export default PreviewFile;
