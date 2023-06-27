import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from 'actions/hello';
import styles from './style.css';
import { store, userModel } from 'react-model-store';

store.add({
  name: 'hello',
  getValue() {
    return {
      text: 0
    };
  },

  say({ set }, text) {
    set({ text });
  }
});

export default function Hello() {
  const hello = userModel('hello');

  return <div>
    <div>Hello {hello.text}</div>
    <input type="text" onChange={(e) => {
      hello.say(e.target.value);
    }} />
  </div>
}

// class Hello extends React.Component {
//   componentDidMount() {
//       console.log('did mount');
//   }
//   componentWillUnmount() {
//       console.log('will unmount');
//   }
//   render() {
//     const { setHelloTimes, hello } = this.props;
//     return (<div>
//       <div className={styles.text}>Hello Hello World!～ × {hello.times}</div>
//       <div className={styles.button} onClick={() => setHelloTimes(hello.times + 1)}>Say Hello</div>
//     </div>);
//   }
// }

// const mapStateToProps = (state) => ({
//   hello: state.hello,
// })
// const mapDispatchToProps = (dispatch) => ({
//   setHelloTimes: (times) => {
//     dispatch(sayHello(times));
//   }
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Hello);
