import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './modelStore';

const routes = [
  {
    path: '/reduxDemo',
    component: lazy(() => import(/* webpackChunkName: 'reduxDemo' */ './containers/ReduxDemo')),
  }, {
    path: '/hookReduxDemo',
    component: lazy(() => import(/* webpackChunkName: 'hookReduxDemo' */ './containers/HookReduxDemo')),
  }, {
    path: '/modelStoreDemo',
    component: lazy(() => import(/* webpackChunkName: 'modelStoreDemo' */ './containers/ModelStoreDemo')),
  }
];

function App() {
  return (<Suspense fallback={null}>
    <Switch>
      {
        routes.map(({ path, component }) => {
          return <Route
            key={path}
            path={path}
            component={component}
          />;
        })
      }
    </Switch>
  </Suspense>);
}

export default App;