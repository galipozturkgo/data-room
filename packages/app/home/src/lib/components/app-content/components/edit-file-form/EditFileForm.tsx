import { Form, useFormHook } from '@dataroom/ui-components';
import { useUpdateFileMutation } from '@dataroom/ui-queries';
import { useEffect } from 'react';

import schema from './EditFileForm.schema';
import { EditFileFormProps } from './EditFileForm.types';
import { UpdateFile } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';

const EditFileForm: React.FC<EditFileFormProps> = ({ id, name, onClose }) => {
  const [updateFile, { isSuccess, error }] = useUpdateFileMutation();

  const { hook, setFieldErrors } = useFormHook<UpdateFile>({
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

  const handleSubmit = async (data: UpdateFile) =>
    await updateFile({
      ...data,
      id,
    });

  const handleCancel = () => onClose();

  useEffect(() => {
    isSuccess && onClose();
  }, [isSuccess]);

  return (
    <Form<UpdateFile> hook={hook} handleSubmit={handleSubmit}>
      <Form.Title title="Edit file" />
      <Form.Panel>
        <Form.Text field="name" label="File name" />
      </Form.Panel>
      <Form.Footer
        confirm={{ kind: 'update' }}
        cancel={{ onClick: handleCancel }}
      />
    </Form>
  );
};

export default EditFileForm;
