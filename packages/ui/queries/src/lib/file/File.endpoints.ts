import { baseApi } from '../base/query/Api';
import { deleteFile } from './DeleteFile.api';
import { getFile } from './GetFile.api';
import { signFile } from './SignFile.api';

export const fileEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteFile: deleteFile(builder),
    getFile: getFile(builder),
    signFile: signFile(builder),
  }),
});

export const { useDeleteFileMutation, useGetFileQuery, useSignFileMutation } =
  fileEndpoints;
