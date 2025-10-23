import * as Yup from 'yup';

export default Yup.array(
  Yup.object().shape({
    id: Yup.string().required(),
    folder: Yup.string().required(),
    name: Yup.string().required(),
    type: Yup.string().required(),
  }),
);
