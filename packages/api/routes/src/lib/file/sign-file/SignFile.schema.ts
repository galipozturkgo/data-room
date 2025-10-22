import * as Yup from 'yup';

export default Yup.object().shape({
  prefix: Yup.string().required(),
  name: Yup.string().required(),
  type: Yup.string().required(),
});
