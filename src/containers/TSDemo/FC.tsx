import React, { useState, useRef } from 'react';

interface IProps {
  name: string
}

// function FC(props: IProps) {
function FC<K>(props: K) {
  const [v, setV] = useState<number>(0);
  const nameInput = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

// React.FunctionComponent 等于 React.FC
// const FC: React.FC<IProps> = (props) => {
// const FC = <K extends any>(props: K) => {
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//     </div>
//   );
// }

export default FC;