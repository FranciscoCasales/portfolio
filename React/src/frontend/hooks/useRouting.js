import MENU_OPTIONS from 'frontend/constants/menu.constants';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import useIntersectingRouting from './useIntersectingRouting';
import useScrollTo from './useScrollTo';

const useRouting = (isMobile = false) => {
  const routingState = useIntersectingRouting();
  const { activeRoute, updateRoute } = useContext(AppContext);
  const activeRouteM = MENU_OPTIONS.get(activeRoute || 'menu-home') || 'Home';
  const [scrollTo, setScrollTo] = useState(activeRouteM);
  const [activeScroll, setActiveScroll] = useState(true);
  const navigate = (route) => {
    if (updateRoute) {
      updateRoute(route);
    }
    setActiveScroll(true);
    setScrollTo(MENU_OPTIONS.get(route) || 'Home');
  };
  useEffect(() => {
    setActiveScroll(false);
    setScrollTo(MENU_OPTIONS.get(activeRoute || 'menu-home') || 'Home');
  }, [activeRoute]);
  useScrollTo(scrollTo, isMobile, activeScroll);
  return { ...routingState, navigate };
};

export default useRouting;
