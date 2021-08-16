import { useEffect } from 'react';

const useScrollTo = (elementId, isMobile = false, isActive = true) => {
  useEffect(() => {
    if (isActive) {
      const element = document.getElementById(elementId);
      const timeout = window.setTimeout(() => {
        window.scroll({
          top: (element?.offsetTop || 0) - (isMobile ? 15 : 65),
          behavior: 'smooth',
        });
        window.clearTimeout(timeout);
      }, 0);
    }
  }, [elementId]);
};

export default useScrollTo;
