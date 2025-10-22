'use client';

import { classes } from '@dataroom/ui-utils';
import React, { Fragment } from 'react';

import { Divider } from '../../../../../divider/components/Divider';
import { TickIcon } from '../../../../../icon/components/Tick';
import { ListBoxValues } from '../list-box/ListBox.types';
import { BaseListBox } from '../list-box-base/ListBoxBase';
import { ListBoxOptionsProps } from './ListBoxOptions.types';

const LisboxOptionsBase = <T extends ListBoxValues>({
  options,
  hideIcon,
  hideTick,
}: ListBoxOptionsProps<T>) => {
  return options.map((option, key) => (
    <Fragment key={key}>
      <BaseListBox.Option
        key={option.key}
        option={option}
        className={styles.option}
      >
        {({ selected }) => (
          <Fragment>
            <div className={styles.body}>{option?.children || option.key}</div>
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
      </BaseListBox.Option>
      {option.divide && <Divider />}
    </Fragment>
  ));
};

const styles = {
  option: classes('flex', 'items-center', 'py-1', 'px-1.5', 'gap-2'),
  body: classes('flex-1'),
  icon: classes('grid', 'place-content-center'),
  empty: classes('w-4'),
  tickIcon: classes('text-skin-muted'),
};

export const ListBoxOptions = React.memo(LisboxOptionsBase);
