import { useEffect, useState } from 'react';

const useNearScreen = ({ ref, threshold = 0.25, onlyOnce = true }) => {
  const [isIntersected, setIsIntersected] = useState(false);
  const obsCallback = (entries, observer) => {
    setIsIntersected(entries[0].isIntersecting);
    if (entries[0].isIntersecting && onlyOnce) {
      observer.disconnect();
    }
  };
  const options = {
    threshold,
  };
  useEffect(() => {
    const obs = new window.IntersectionObserver(obsCallback, options);
    if (ref?.current) {
      obs.observe(ref.current);
    }
    return () => {
      obs.disconnect();
    };
  }, [ref]);
  return isIntersected;
};

export default useNearScreen;
