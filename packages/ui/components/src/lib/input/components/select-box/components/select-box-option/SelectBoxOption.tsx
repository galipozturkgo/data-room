'use client';

import { classes, classNames } from '@dataroom/ui-utils';

import { Input } from '../../../input/components/input/Input';
import { useSelectBox } from '../../context/SelectBoxContext';
import { SelectBoxOptionProps } from './SelectBoxOption.types';

const SelectBoxOptionBase: React.FC<SelectBoxOptionProps> = ({
  option,
  children,
  disabled,
  className,
  ...props
}) => {
  const {
    values,
    input,
    disabled: parentDisabled,
    toggleSelection,
  } = useSelectBox();

  const { disable, ...inputProps } = input || {};

  const isDisable = disabled || parentDisabled || disable;

  const selected = values.some((i) => i.key === option.key);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!isDisable && (e.code === 'Enter' || e.code === 'Space')) {
      toggleSelection(option);
    }
  };

  return (
    <Input disable={isDisable} {...inputProps}>
      {({
        inputClasses,
        backgroundClasses,
        borderClasses,
        disabledClasses,
        focusVisibleClasses,
        errorClasses,
        passedClasses,
        passedProps,
      }) => (
        <Input.Wrapper
          as="li"
          role="option"
          id={`option-${option.key}`}
          aria-selected={selected}
          tabIndex={isDisable ? -1 : 0}
          onClick={() => toggleSelection(option)}
          onKeyDown={handleKeyDown}
          className={classNames(
            inputClasses,
            backgroundClasses,
            focusVisibleClasses,
            borderClasses,
            errorClasses,
            disabledClasses,
            passedClasses,
            styles.option,
            selected && styles.selected,
            className,
          )}
          {...passedProps}
          {...props}
        >
          {children ||
            (option.children
              ? typeof option.children === 'function'
                ? option.children({ option, selected })
                : option.children
              : option.key)}
        </Input.Wrapper>
      )}
    </Input>
  );
};

const styles = {
  option: classes('flex', 'items-center', 'justify-center', 'cursor-pointer'),
  selected: classes('bg-skin-primary', 'text-skin-inverted'),
};

export const SelectBoxOption = SelectBoxOptionBase;
