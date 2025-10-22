'use client';

import { classes } from '@dataroom/ui-utils';

import { Disclosure } from '../../../../../disclosure/components/disclosure/Disclosure';
import {
  RouterMenuDisclosureButton,
  RouterMenuDisclosurePanel,
} from '../router-menu-disclouse/RouterMenuDisclosure';
import { RouterChildMenuProps } from './RouterChildMenu.types';

const RouterChildMenuBase: React.FC<RouterChildMenuProps> = ({
  item,
  navigate,
  pathname,
}) => {
  const defaultOpen = pathname.includes(item.path!);

  if (!item.title) {
    return null;
  }

  return (
    <Disclosure defaultOpen={defaultOpen}>
      <Disclosure.Button className={styles.disclosure} tabIndex={-1}>
        {({ open }) => (
          <RouterMenuDisclosureButton
            open={open}
            item={item}
            navigate={navigate}
            pathname={pathname}
          />
        )}
      </Disclosure.Button>
      <Disclosure.Panel className={styles.panel}>
        <RouterMenuDisclosurePanel item={item} />
      </Disclosure.Panel>
    </Disclosure>
  );
};

const styles = {
  disclosure: classes('w-full'),
  panel: classes(
    'space-y-1',
    'ml-4',
    'pl-2',
    'border-l-2',
    'border-skin-silent',
  ),
};

export const RouterChildMenu = RouterChildMenuBase;
