import { classes, classNames } from '@dataroom/ui-utils';
import RenderFolder from './components/render-folder/RenderFolder';
import { useFileDropzone } from './hooks/useFileDropzone';

const AppContent = () => {
  const { isDragActive, getInputProps, getRootProps } = useFileDropzone({
    noClick: true,
  });

  return (
    <div className={styles.root}>
      {isDragActive && (
        <div className={styles.activeBackdrop}>
          <div className={styles.activeDropText}>Drop the files here ...</div>
        </div>
      )}

      <div
        {...getRootProps()}
        className={classNames(
          styles.container,
          isDragActive && styles.dragActive,
        )}
      >
        <input {...getInputProps()} />

        <RenderFolder />
      </div>
    </div>
  );
};

const styles = {
  root: classes(
    'relative',
    'h-full',
    'w-full',
    'px-8',
    'pb-8',
    'bg-skin-accent/20',
  ),
  container: classes(
    'px-6',
    'py-3',
    'bg-skin-base',
    'rounded-3xl',
    'border',
    'border-skin-primary/15',
    'h-full',
  ),
  dragActive: classes('bg-skin-accent/10', 'blur-[2px]', 'duration-200'),
  activeBackdrop: classes(
    'absolute',
    'top-0',
    'bottom-0',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'duration-200',
  ),
  activeDropText: classes('p-14', 'rounded-3xl', 'bg-skin-blue/40'),
};

export default AppContent;
