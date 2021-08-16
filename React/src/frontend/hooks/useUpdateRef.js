import { PAGES } from 'frontend/constants/general.constants';
import { useReducer } from 'react';

const useUpdateRef = () => {
  const refReducer = (state, action) => {
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
