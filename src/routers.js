import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import(/* webpackChunkName: 'reduxDemo' */ './containers/ReduxDemo')),
  }, {
    path: '/hookReduxDemo',
    component: lazy(() => import(/* webpackChunkName: 'hookReduxDemo' */ './containers/HookReduxDemo')),
  }, {
    path: '/modelStoreDemo',
    component: lazy(() => import(/* webpackChunkName: 'modelStoreDemo' */ './containers/ModelStoreDemo')),
  }
];

export default routes;