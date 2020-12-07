import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import rootReducer from './reducers';

const reducers = combineReducers(rootReducer);
const middleware = applyMiddleware();
const devtoolValid = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
const enhance = devtoolValid ? compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__()) : middleware;

const store = createStore(reducers, {}, enhance);

store.asyncReducers = rootReducer;

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const rootReducer = require('./reducers').default;
    const asyncReducers = store.asyncReducers;
    store.replaceReducer(combineReducers({
      ...rootReducer,
      ...asyncReducers,
    }));
  });
}

export {
  store,
};
