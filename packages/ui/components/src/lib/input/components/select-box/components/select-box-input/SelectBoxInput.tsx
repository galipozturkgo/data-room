'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, { useCallback, useEffect, useRef } from 'react';

import { useSelectBox } from '../../context/SelectBoxContext';
import { SelectBoxInputProps } from './SelectBoxInput.types';

const SelectBoxInputBase = (
  { children, className, ...props }: SelectBoxInputProps,
  ref: React.RefObject<HTMLUListElement>,
) => {
  const listRef = useRef<HTMLUListElement>(null);
  const {
    options,
    disabled,
    highlighted,
    direction,
    highlightAbove,
    highlightBelow,
    changeHighlight,
    toggleSelection,
  } = useSelectBox();

  useEffect(() => {
    if (highlighted !== null && listRef.current) {
      const items = listRef.current.querySelectorAll('li');
      if (items[highlighted]) {
        items[highlighted].focus();
      }
    }
  }, [highlighted]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLUListElement>) => {
      if (disabled) {
        return;
      }

      switch (e.code) {
        case direction === 'vertical' ? 'ArrowDown' : 'ArrowRight':
          e.preventDefault();
          highlightAbove();
          break;

        case direction === 'vertical' ? 'ArrowUp' : 'ArrowLeft':
          e.preventDefault();
          highlightBelow();
          break;

        case 'Enter':
        case 'Space':
          if (highlighted !== null) {
            const option = options[highlighted];
            toggleSelection(option);
          }
          break;

        case 'Escape':
          changeHighlight(null);
          break;

        default:
          break;
      }
    },
    [
      options,
      highlighted,
      direction,
      toggleSelection,
      highlightAbove,
      highlightBelow,
      changeHighlight,
    ],
  );

  const handleRef = useCallback(
    (el: HTMLUListElement) => {
      if (ref) {
        ref.current = el;
      }

      listRef.current = el;
    },
    [ref, listRef],
  );

  return (
    <ul
      ref={handleRef}
      role="listbox"
      tabIndex={-1}
      aria-activedescendant={
        highlighted !== null ? `option-${highlighted}` : undefined
      }
      className={classNames(
        styles.options,
        direction === 'vertical' && styles.vertical,
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children({ options })}
    </ul>
  );
};

const styles = {
  options: classes('flex', 'gap-1.5', 'justify-around', 'tracking-tight'),
  vertical: classes('flex-col'),
};

export const SelectBoxInput = React.forwardRef(SelectBoxInputBase);
