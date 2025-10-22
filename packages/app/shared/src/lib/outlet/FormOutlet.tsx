import { classes } from '@dataroom/ui-utils';
import { Outlet } from 'react-router-dom';

const FormOutlet = () => {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};

const styles = {
  root: classes('flex', 'w-full', 'h-full'),
};

export default FormOutlet;
