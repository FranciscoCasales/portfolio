import AppContext from 'frontend/context/AppContext';
import { useContext, useEffect, useMemo, useRef } from 'react';

const useMenuRef = (actionType) => {
  const { updateRef } = useContext(AppContext);
  const elementRef = useRef(null);
  const memoElementRef = useMemo(() => elementRef);
  const action = {
    type: actionType,
    payload: memoElementRef,
  };
  useEffect(() => {
    window.setTimeout(() => {
      if (updateRef) {
        updateRef(action);
      }
    }, 0);
  }, [memoElementRef]);
  return memoElementRef;
};

export default useMenuRef;
