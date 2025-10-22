import { SelectBoxOption } from '../select-box/SelectBox.types';

export type SelectBoxOptionProps = Omit<
  React.ComponentPropsWithRef<'li'>,
  'value' | 'onChange'
> & {
  option: SelectBoxOption;
  disabled?: boolean;
};
