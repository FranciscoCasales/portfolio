import { useEffect, useState } from 'react';

const useScreenSize = (): [number, number] => {
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth
  );
  const [clientHeight, setClientHeight] = useState(
    document.documentElement.clientHeight
  );
  const handleResizeEvent = (event: any) => {
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
