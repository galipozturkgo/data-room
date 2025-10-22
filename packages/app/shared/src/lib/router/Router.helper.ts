import { RouterMenuItem } from '@dataroom/ui-components';

export const getFlattenRoutes = (
  routeItems: RouterMenuItem[],
): RouterMenuItem[] => {
  const recursive = (
    item: RouterMenuItem,
    parentPath?: string,
  ): RouterMenuItem[] => {
    const items: RouterMenuItem[] = [];

    if (item?.children) {
      const subItems = item?.children?.map((child) =>
        recursive(child, item.path),
      );

      return items.concat(...subItems);
    } else {
      items.push({
        ...item,
        path: parentPath ? parentPath + '/' + item.path : item.path,
      });
    }

    return items;
  };

  return routeItems
    .map((route) => recursive(route))
    .reduce((c, p) => [...c, ...p], []);
};
