import React from 'react';
import { connect } from 'react-redux';
import { hot } from "react-hot-loader/root";
import styles from './style.css';

class Hello extends React.Component {
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
      console.log('did mount');
  }
  componentWillUnmount() {
      console.log('will unmount');
  }
  render() {
    const { setHelloTimes, hello } = this.props;
    return (<div>
      <div className={styles.text}>Hello World!～ × {hello.times}</div>
      <div className={styles.button} onClick={() => setHelloTimes(hello.times + 1)}>Say Hello</div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  hello: state.hello,
})
const mapDispatchToProps = (dispatch) => ({
  setHelloTimes: (times) => {
    dispatch({
      type: 'sayHello',
      times,
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(Hello));