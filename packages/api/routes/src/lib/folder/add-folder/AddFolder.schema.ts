import { FolderModel } from '@dataroom/api-models';
import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required()
    .max(24)
    .test({
      name: 'name',
      message: ' already created',
      test: async (name) => !(await FolderModel.exists({ name })),
    }),
  parent: Yup.string().required(),
});
