import { combineReducers } from 'redux';

const rootReducer = {
  root: () => null,
  hello: (state = { times: 0 }, action) => {
    switch (action.type) {
      case 'sayHello':
        return { ...state, times: action.times };
      default:
        return state;
    }
  },
};

export default rootReducer;