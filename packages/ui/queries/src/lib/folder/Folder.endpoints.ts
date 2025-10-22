import { baseApi } from '../base/query/Api';
import { addFolder } from './AddFolder.api';
import { deleteFolder } from './DeleteFolder.api';
import { folders } from './Folders.api';
import { updateFolder } from './UpdateFolder.api';

export const fontEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    folders: folders(builder),
    addFolder: addFolder(builder),
    updateFolder: updateFolder(builder),
    deleteFolder: deleteFolder(builder),
  }),
});

export const {
  useFoldersQuery,
  useLazyFoldersQuery,
  useAddFolderMutation,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
} = fontEndpoints;
