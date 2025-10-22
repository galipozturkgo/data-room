'use client';

import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useRoutes } from 'react-router-dom';

import { getFlattenRoutes } from './Router.helper';
import { RouterRendererProps } from './Router.types';

const RouterBase: React.FC<RouterRendererProps> = ({ routes }) => {
  const { pathname } = useLocation();

  const element = useRoutes(routes);
  const flattened = getFlattenRoutes(routes);
  const item = flattened.find((item) => item.path === pathname);
  const title = item?.title ? `${item.title} | Data Room` : 'Data Room';

  useEffect(() => {
    if (item) {
      document.title = title;
    }
  }, [title]);

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {element}
    </Fragment>
  );
};

export const Router = RouterBase;
