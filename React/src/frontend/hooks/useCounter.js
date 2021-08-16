import { useState } from 'react';

const useCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialCount);

  return {
    increment,
    decrement,
    reset,
    counter,
  };
};

export default useCounter;
