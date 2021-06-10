import { NearScreenModel } from '@models/near-screen.model';
import { useEffect, useState } from 'react';

const useNearScreen = ({
  ref,
  threshold = 0.25,
  onlyOnce = true,
}: NearScreenModel): boolean => {
  const [isIntersected, setIsIntersected] = useState(false);
  const obsCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    setIsIntersected(entries[0].isIntersecting);
    if (entries[0].isIntersecting && onlyOnce) {
      observer.disconnect();
    }
  };
  const options: IntersectionObserverInit = {
    threshold,
  };
  useEffect(() => {
    const obs = new IntersectionObserver(obsCallback, options);
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
