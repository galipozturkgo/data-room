import { FolderModel } from '@dataroom/api-models';
import * as Yup from 'yup';

export default Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string()
    .required()
    .test({
      name: 'name',
      message: ' already exists',
      test: async (name, { parent }) => {
        const article = await FolderModel.findById(parent.id);

        return name === article?.name
          ? true
          : !(await FolderModel.exists({ name }));
      },
    }),
});
