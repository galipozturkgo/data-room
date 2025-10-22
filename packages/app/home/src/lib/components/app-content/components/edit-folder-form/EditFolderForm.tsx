import { Form, useFormHook } from '@dataroom/ui-components';
import { useUpdateFolderMutation } from '@dataroom/ui-queries';
import { useEffect } from 'react';

import schema from './EditFolderForm.schema';
import { EditFolderFormProps } from './EditFolderForm.types';
import { UpdateFolder } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';

const EditFolderForm: React.FC<EditFolderFormProps> = ({
  id,
  name,
  onClose,
}) => {
  const [updateFolder, { isSuccess, error }] = useUpdateFolderMutation();

  const { hook, setFieldErrors } = useFormHook<UpdateFolder>({
    schema,
    defaultValues: {
      name,
    },
  });

  useEffect(() => {
    if (isServerError(error) && error.data.errors) {
      setFieldErrors(error.data.errors);
    }
  }, [error]);

  const handleSubmit = async (data: UpdateFolder) =>
    await updateFolder({
      ...data,
      id,
    });

  const handleCancel = () => onClose();

  useEffect(() => {
    isSuccess && onClose();
  }, [isSuccess]);

  return (
    <Form<UpdateFolder> hook={hook} handleSubmit={handleSubmit}>
      <Form.Title title="Edit folder" />
      <Form.Panel>
        <Form.Text field="name" label="Folder name" />
      </Form.Panel>
      <Form.Footer
        confirm={{ kind: 'update' }}
        cancel={{ onClick: handleCancel }}
      />
    </Form>
  );
};

export default EditFolderForm;
