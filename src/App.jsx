import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './modelStore';

const Hello = lazy(() => import(/* webpackChunkName: 'hello' */ './containers/Hello'));
const TestStore = lazy(() => import(/* webpackChunkName: 'hello' */ './containers/TestStore'));

function App() {
  return (<Suspense fallback={null}>
    <Switch>
      <Route path="/hello" component={Hello} />
      <Route path="/testStore" component={TestStore} />
    </Switch>
  </Suspense>);
}

export default App;