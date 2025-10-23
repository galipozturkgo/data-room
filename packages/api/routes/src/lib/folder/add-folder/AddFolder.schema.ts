import { FolderModel } from '@dataroom/api-models';
import * as Yup from 'yup';

export default Yup.object().shape({
  parent: Yup.string().required(),
  name: Yup.string()
    .required()
    .max(24)
    .test({
      name: 'name',
      message: ' already created',
      test: async (name, { parent }) =>
        !(await FolderModel.exists({ parent: parent.parent, name })),
    }),
});
