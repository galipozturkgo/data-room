import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().required().email().min(3).max(255),
  password: Yup.string().required().min(8).max(24),
});
