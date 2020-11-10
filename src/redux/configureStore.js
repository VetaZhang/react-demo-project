import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import rootReducer from './reducer';

const reducers = combineReducers(rootReducer);
const appliedMiddlewares = applyMiddleware.apply(applyMiddleware);
const devtoolValid = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
const middleware = devtoolValid ? compose(appliedMiddlewares, window.__REDUX_DEVTOOLS_EXTENSION__()) : compose(appliedMiddlewares);

const store = createStore(
  reducers,
  {},
  middleware,
);

store.asyncReducers = rootReducer;

export {
  store,
};
