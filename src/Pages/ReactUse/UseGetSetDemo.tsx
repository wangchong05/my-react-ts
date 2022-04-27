import React, { useState } from 'react';
import {useGetSet} from 'react-use';

const UseGetSetDemo = () => {
  const [get, set] = useGetSet(0);
  const onClick = () => {
    setTimeout(() => {
      set(get() + 1)
    }, 1000);
  };

  const [num, setNum] = useState(0);
  const onClick2 = () => {
    setTimeout(() => {
      setNum(num + 1)
    }, 1000);
  };

  return (
    <>
      useGetSet: <button onClick={onClick}>Clicked: {get()}</button>
      useState: <button onClick={onClick2}>Clicked: {num}</button>
    </>
  );
};

export default UseGetSetDemo;