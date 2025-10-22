export type FieldError = {
  message: string;
  params?: {
    label?: string;
    path?: string;
  } & Record<string, unknown>;
};

export interface FieldErrorProps {
  error: FieldError;
  label?: string;
  className?: string;
}
