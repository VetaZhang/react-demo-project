import React, { useState, useEffect, useCallback } from 'react';
import { useDemoContext } from 'hookRedux';

export default function Child() {
  const { state, dispath } = useDemoContext();

  return <div>
    <div>count {state.count}</div>
    <button onClick={() => {
      dispath({
        type: 'increment',
      });
    }}>increment</button>
    <button onClick={() => {
      dispath({
        type: 'decrement',
      });
    }}>decrement</button>
    <button onClick={() => {
      dispath({
        type: 'reset',
      });
    }}>reset</button>
  </div>
}