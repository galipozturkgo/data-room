import { Form, useFormHook } from '@dataroom/ui-components';
import { useAddFolderMutation } from '@dataroom/ui-queries';
import { useEffect } from 'react';

import schema from './AddFolderForm.schema';
import { AddFolderFormProps } from './AddFolderForm.types';
import { AddFolder } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';
import { useFolder } from '../folder-context/FolderContext';

const AddFolderForm: React.FC<AddFolderFormProps> = ({ onClose }) => {
  const { activeFolder } = useFolder();
  const [addFolder, { isSuccess, error }] = useAddFolderMutation();

  const { hook, setFieldErrors } = useFormHook<AddFolder>({
    schema,
    defaultValues: { parent: activeFolder },
  });

  useEffect(() => {
    if (isServerError(error) && error.data.errors) {
      setFieldErrors(error.data.errors);
    }
  }, [error]);

  const handleSubmit = async (data: AddFolder) => await addFolder(data);

  const handleCancel = () => onClose();

  useEffect(() => {
    isSuccess && onClose();
  }, [isSuccess]);

  return (
    <Form<AddFolder> hook={hook} handleSubmit={handleSubmit}>
      <Form.Title title="Add new folder" />
      <Form.Panel>
        <Form.Text field="name" label="Folder name" />
      </Form.Panel>
      <Form.Footer
        confirm={{ kind: 'create' }}
        cancel={{ onClick: handleCancel }}
      />
    </Form>
  );
};

export default AddFolderForm;
