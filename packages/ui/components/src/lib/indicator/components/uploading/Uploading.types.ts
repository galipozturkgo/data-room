export type UploadStatus = 'success' | 'failed' | number;

export interface UploadingProps {
  progress?: UploadStatus;
  onlyPercentage?: boolean;
  className?: string;
}
