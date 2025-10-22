import { Message } from '@dataroom/shared-types';
import { IconProps } from '@dataroom/ui-utils';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

type IndexRouteItem = IndexRouteObject & {
  title?: Message;
  icon?: React.ReactElement<IconProps>;
  hidden?: boolean;
};

type NonIndexRouteItem = Omit<NonIndexRouteObject, 'children'> & {
  title?: Message;
  icon?: React.ReactElement<IconProps>;
  hidden?: boolean;
  children?: RouterMenuItem[];
};

export type RouterMenuItem = IndexRouteItem | NonIndexRouteItem;

export type RouterMenuProps = {
  children: React.ReactNode;
  className?: string;
};
