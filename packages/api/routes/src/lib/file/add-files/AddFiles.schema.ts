import * as Yup from 'yup';

export default Yup.object().shape({
  folder: Yup.string().required(),
  files: Yup.array(
    Yup.object().shape({
      key: Yup.string().required(),
      name: Yup.string().required(),
      type: Yup.string().required(),
      size: Yup.number().required(),
    }),
  ),
});
