import { BrandLogo } from '@dataroom/ui-components';
import { classes } from '@dataroom/ui-utils';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return <BrandLogo onClick={handleClick} className={styles.root} />;
};

const styles = {
  root: classes('w-16', 'cursor-pointer'),
};

export default Brand;
