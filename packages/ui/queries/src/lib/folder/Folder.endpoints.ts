import { baseApi } from '../base/query/Api';
import { addFolder } from './AddFolder.api';
import { deleteFolder } from './DeleteFolder.api';
import { folder } from './Folder.api';
import { updateFolder } from './UpdateFolder.api';

export const fontEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    folder: folder(builder),
    addFolder: addFolder(builder),
    updateFolder: updateFolder(builder),
    deleteFolder: deleteFolder(builder),
  }),
});

export const {
  useFolderQuery,
  useAddFolderMutation,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
} = fontEndpoints;
