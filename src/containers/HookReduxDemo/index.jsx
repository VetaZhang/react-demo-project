import React, { useState, useEffect, useCallback } from 'react';
import { ContextProvider } from 'hookRedux';
import Child from './Child';

export default function HookReduxDemo() {
  return <ContextProvider>
    <Child></Child>
  </ContextProvider>
}