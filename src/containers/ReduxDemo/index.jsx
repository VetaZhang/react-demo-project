import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from 'reduxConfig/actions/hello';
import styles from './style.css';

class ReduxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    const { setHelloTimes, hello } = this.props;
    return (<div>
      <div className={styles.text}>Hello World～ × {hello.times}</div>
      <div className={styles.button} onClick={() => setHelloTimes(hello.times + 1)}>Say Hello</div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  hello: state.hello,
})
const mapDispatchToProps = (dispatch) => ({
  setHelloTimes: (times) => {
    dispatch(sayHello(times));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);
