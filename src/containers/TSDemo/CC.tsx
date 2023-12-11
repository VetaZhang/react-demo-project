import React from 'react';

interface IProps {
  name: string;
}

interface IState {
  count: number;
}

class CC extends React.Component<IProps, IState> {
// class App<K, P> extends React.Component<K, P> {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        {this.state.count}
        {this.props.name}
      </div>
    );
  }
}

export default CC;