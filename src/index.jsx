import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'reduxConfig/configureStore';
import routerList from './routers';
import './modelStore';

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        <Router>
          <Switch>
            {
              routerList.map(({ path, component }) => {
                return <Route
                  key={path}
                  path={path}
                  component={component}
                />;
              })
            }
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  </StrictMode>
);
