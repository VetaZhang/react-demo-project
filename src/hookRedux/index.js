import React, { createContext, useContext, useReducer } from 'react';

const store = {
  count: 0,
};

const Context = createContext({
  state: store,
  dispath: () => {}
});

const reducer = function(state, action) {
  const { type, payload } = action;
  switch(type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'reset':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export function ContextProvider({ children }) {
  const [state, dispath] = useReducer(reducer, store);
  return <Context.Provider value={{ state, dispath }}>
    { children }
  </Context.Provider>;
}

export function useDemoContext() {
  return useContext(Context);
}