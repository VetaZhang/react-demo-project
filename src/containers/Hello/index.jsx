import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from 'actions/hello';
import styles from './style.css';

class Hello extends React.Component {
  componentDidMount() {
      console.log('did mount');
  }
  componentWillUnmount() {
      console.log('will unmount');
  }
  render() {
    const { setHelloTimes, hello } = this.props;
    return (<div>
      <div className={styles.text}>Hello Hello World!～ × {hello.times}</div>
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
)(Hello);
