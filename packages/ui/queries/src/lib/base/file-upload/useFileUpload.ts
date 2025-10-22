import { useCallback, useState } from 'react';

import { useHttp } from '../http/useHttp';

type UploadStatus = 'success' | 'failed' | number;

interface UploadFileItem {
  url: string;
  file: File;
}

interface UploadArgs {
  file: UploadFileItem[] | UploadFileItem;
  publicRead?: boolean;
  onProgress?: (progress: UploadStatus) => void;
}

export const useFileUpload = () => {
  const http = useHttp();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = useCallback(
    async ({ file, publicRead = true, onProgress }: UploadArgs) => {
      try {
        setIsUploading(true);
        setIsSuccess(false);

        const fileList = Array.isArray(file) ? file : [file];

        const totalSize = fileList.reduce((sum, f) => sum + f.file.size, 0);

        for (let i = 0; i < fileList.length; i++) {
          const { file, url } = fileList[i];

          await http.put(url, file, {
            headers: {
              'Content-Type': file.type,
              ...(publicRead ? { 'x-amz-acl': 'public-read' } : {}),
            },
            withCredentials: false,
            onUploadProgress: (e) => {
              if (!e.loaded || !e.total) {
                return;
              }

              const currentProgress = e.loaded;

              const otherUploaded = fileList
                .slice(0, i)
                .reduce((sum, f) => sum + f.file.size, 0);

              const totalProgress =
                (otherUploaded + currentProgress) / totalSize;
              onProgress?.(Math.min(totalProgress, 1));
            },
          });
        }

        onProgress?.('success');
        setIsSuccess(true);
      } catch {
        onProgress?.('failed');
        setIsSuccess(false);
      } finally {
        setIsUploading(false);
      }
    },
    [http],
  );

  return { uploadFile, isSuccess, isUploading };
};
