import { useEffect } from 'react';

const useScrollTo = (
  elementId: string,
  isMobile = false,
  isActive = true
): void => {
  useEffect(() => {
    if (isActive) {
      const element = document.getElementById(elementId);
      const timeout = setTimeout(() => {
        window.scroll({
          top: (element?.offsetTop || 0) - (isMobile ? 15 : 65),
          behavior: 'smooth',
        });
        clearTimeout(timeout);
      }, 0);
    }
  }, [elementId]);
};

export default useScrollTo;
