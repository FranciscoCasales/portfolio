import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [clientWidth, setClientWidth] = useState(() => {
    if (global?.document) {
      return document.documentElement.clientWidth;
    }
    return 551;
  });
  const [clientHeight, setClientHeight] = useState(() => {
    if (global?.document) {
      return document.documentElement.clientHeight;
    }
    return 901;
  });
  const handleResizeEvent = (event) => {
    setClientWidth(event.target.document.documentElement.clientWidth);
    setClientHeight(event.target.document.documentElement.clientHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResizeEvent);
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);
  return [clientWidth, clientHeight];
};

export default useScreenSize;
