import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required().min(3).max(255),
});
