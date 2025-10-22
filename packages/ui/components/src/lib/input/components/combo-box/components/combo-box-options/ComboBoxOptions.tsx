'use client';

import { classes } from '@dataroom/ui-utils';
import React, { Fragment } from 'react';

import { Divider } from '../../../../../divider/components/Divider';
import { TickIcon } from '../../../../../icon/components/Tick';
import { ComboBoxValues } from '../combo-box/ComboBox.types';
import { ComboBoxOption } from '../combo-box-option/ComboBoxOption';
import { ComboBoxOptionsProps } from './ComboBoxOptions.types';

const ComboBoxOptionsBase = <T extends ComboBoxValues>({
  options,
  hideIcon,
  hideTick,
}: ComboBoxOptionsProps<T>) => {
  return options?.map(
    (option, key) =>
      !option.hidden && (
        <Fragment key={key}>
          <ComboBoxOption
            key={option.key}
            option={option}
            className={styles.option}
          >
            {({ selected }) => (
              <Fragment>
                <div className={styles.body}>
                  {option?.children || option.key}
                </div>
                {!hideIcon && (
                  <div className={styles.icon}>
                    {!hideTick && selected ? (
                      <TickIcon size="sm" className={styles.tickIcon} />
                    ) : (
                      <span className={styles.empty} />
                    )}
                  </div>
                )}
              </Fragment>
            )}
          </ComboBoxOption>
          {option.divide && <Divider />}
        </Fragment>
      ),
  );
};

const styles = {
  option: classes('flex', 'items-center', 'py-1', 'px-1.5', 'gap-2'),
  body: classes('flex-1'),
  icon: classes('grid', 'place-content-center'),
  empty: classes('w-4'),
  tickIcon: classes('text-skin-muted'),
};

export const ComboBoxOptions = React.memo(ComboBoxOptionsBase);
