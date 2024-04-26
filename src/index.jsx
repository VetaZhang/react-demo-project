import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'reduxConfig/configureStore';

import routerList from './routers';
import './modelStore';

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Switch>
            {routerList.map(({ path, component }) => {
              return <Route key={path} path={path} exact={path === '/'} component={component} />;
            })}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>
);
