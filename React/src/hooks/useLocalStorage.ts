import { useState } from 'react';
import { GenericFn } from '@customTypes/general-types';

const useLocalStorage = (
  key: string,
  initialValue: string
): [any, GenericFn] => {
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

  const setLocalStorage = (value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setData(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [data, setLocalStorage];
};

export default useLocalStorage;
