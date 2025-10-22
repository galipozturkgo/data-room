import { BrandLogo } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';

const Brand = () => {
  return <BrandLogo className={styles.root} />;
};

const styles = {
  root: classes('w-16'),
};

export default Brand;
