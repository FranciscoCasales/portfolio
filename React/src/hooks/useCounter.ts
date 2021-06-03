import { useState } from 'react';
import { CounterModel } from '@models/counter-model';

const useCounter = (initialCount = 0): CounterModel => {
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
