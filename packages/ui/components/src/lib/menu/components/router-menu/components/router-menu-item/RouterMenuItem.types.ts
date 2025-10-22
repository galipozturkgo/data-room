import { RouterMenuItem } from '../../RouterMenu.types';

export type RouterMenuItemProps = {
  item: RouterMenuItem;
  pathname: string;
  navigate: (path: string) => void;
  parent?: string;
};
