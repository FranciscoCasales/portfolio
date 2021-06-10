import AppContext from '@context/AppContext';
import { ActionModel } from '@models/context.model';
import { useContext, useEffect, useRef } from 'react';

const useMenuRef = (actionType: number): React.MutableRefObject<null> => {
  const { updateRef } = useContext(AppContext);
  const elementRef = useRef(null);
  const action: ActionModel<React.MutableRefObject<null>> = {
    type: actionType,
    payload: elementRef,
  };
  useEffect(() => {
    setTimeout(() => {
      if (updateRef) {
        updateRef(action);
      }
    }, 0);
  }, [elementRef]);
  return elementRef;
};

export default useMenuRef;
