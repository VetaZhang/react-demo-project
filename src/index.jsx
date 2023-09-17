import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/configureStore';
import App from './App';

render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </StrictMode>
  </Provider>,
  document.getElementById('app'),
);
