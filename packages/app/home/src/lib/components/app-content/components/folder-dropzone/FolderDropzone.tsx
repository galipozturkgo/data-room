import { Table } from '@dataroom/ui-components';
import { useFileDropzone } from '../../hooks/useFileDropzone';
import { classes } from '@dataroom/ui-utils';

const FolderDropzone = () => {
  const { isDragActive, getInputProps, getRootProps } = useFileDropzone();

  return (
    <Table.Body.NotFoundRow className={styles.row}>
      <div className={styles.root} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files.</p>
        )}
      </div>
    </Table.Body.NotFoundRow>
  );
};

const styles = {
  row: classes('h-64', 'w-full'),
  root: classes(
    'grid',
    'place-content-center',
    'text-sm',
    'text-skin-muted',
    'h-full',
    'cursor-pointer',
  ),
};

export default FolderDropzone;
