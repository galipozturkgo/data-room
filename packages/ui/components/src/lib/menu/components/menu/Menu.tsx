'use client';

import { BaseMenu } from '../menu-base/MenuBase';
import { MenuBaseProps } from '../menu-base/MenuBase.types';

const MenuBase: React.FC<MenuBaseProps> & {
  Button: typeof BaseMenu.Button;
  Item: typeof BaseMenu.Item;
  Items: typeof BaseMenu.Items;
} = (props) => <BaseMenu {...props} />;

MenuBase.Button = BaseMenu.Button;
MenuBase.Item = BaseMenu.Item;
MenuBase.Items = BaseMenu.Items;

export const Menu = MenuBase;
