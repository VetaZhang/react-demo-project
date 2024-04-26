import React, { useCallback, useEffect, useState, useRef } from 'react';

import CC from './CC';
import FC from './FC';

function TSDemo() {
  const [s, ss] = useState('');
  useEffect(() => {
    console.log(s);
    
  }, []);
  return (
    <>
      <CC name="cc" />
      <FC />
    </>
  );
}

export default TSDemo;
