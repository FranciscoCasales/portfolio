import { PAGES } from '@constants/general.constants';
import {
  ActionModel,
  AppContextModel,
  ReferenceMenuModel,
} from '@models/context.model';
import { useReducer } from 'react';

const useUpdateRef = (): [
  refs: ReferenceMenuModel,
  updateRef: React.Dispatch<ActionModel<React.MutableRefObject<null>>>
] => {
  const refReducer = (
    state: Partial<AppContextModel>,
    action: ActionModel<React.MutableRefObject<null>>
  ) => {
    switch (action.type) {
      case PAGES.HOME:
        return { ...state, homeRef: action.payload };
      case PAGES.SKILLS:
        return { ...state, skillsRef: action.payload };
      case PAGES.EXPERIENCE:
        return { ...state, experienceRef: action.payload };
      default:
        return state;
    }
  };
  return useReducer(refReducer, {});
};

export default useUpdateRef;
