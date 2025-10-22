import { TextareaAutosizeProps } from 'react-textarea-autosize';

import { InputProps } from '../../input/components/input/Input.types';

export type TextAreaProps = Omit<TextareaAutosizeProps, 'value'> & {
  value?: string;
  input?: InputProps;
  debounce?: number;
  onDebounceChange?: (value: string) => void;
};
