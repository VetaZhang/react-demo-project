import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Hello = lazy(() => import(/* webpackChunkName: 'hello' */ './containers/Hello'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        <Route path="/hello" component={Hello} />
      </Switch>
    </Suspense>);
  }
}

export default App;