import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    try {
      let item = localStorage.getItem(key);
      item = item && item !== 'undefined' ? item : JSON.stringify(initialValue);
      localStorage.setItem(key, item);
      return JSON.parse(item);
    } catch (e) {
      return '';
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setData(value);
    } catch (e) {
      window.console.error(e);
    }
  };

  return [data, setLocalStorage];
};

export default useLocalStorage;
