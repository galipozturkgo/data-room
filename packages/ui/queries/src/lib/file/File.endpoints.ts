import { baseApi } from '../base/query/Api';
import { addFiles } from './AddFiles.api';
import { deleteFile } from './DeleteFile.api';
import { files } from './Files.api';
import { signFiles } from './SignFiles.api';
import { updateFile } from './UpdateFile.api';

export const fileEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    files: files(builder),
    signFiles: signFiles(builder),
    addFiles: addFiles(builder),
    updateFile: updateFile(builder),
    deleteFile: deleteFile(builder),
  }),
});

export const {
  useFilesQuery,
  useSignFilesMutation,
  useAddFilesMutation,
  useUpdateFileMutation,
  useDeleteFileMutation,
} = fileEndpoints;
