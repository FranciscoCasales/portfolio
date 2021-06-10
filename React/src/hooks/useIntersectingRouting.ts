import MENU_OPTIONS from '@constants/menu.constants';
import AppContext from '@context/AppContext';
import { useContext, useEffect, useState } from 'react';
import useNearScreen from './useNearScreen';

const useIntersectingRouting = (): {
  Home: boolean;
  Skills: boolean;
  Experience: boolean;
} => {
  const falsyActiveState = { Home: false, Skills: false, Experience: false };
  const { homeRef, skillsRef, experienceRef, updateRoute, activeRoute } =
    useContext(AppContext);
  const activeRouteM = MENU_OPTIONS.get(activeRoute || 'menu-home') || 'Home';
  const [routingState, setRoutingState] = useState({
    ...falsyActiveState,
    [activeRouteM]: true,
  });
  const homeIsIntersected = useNearScreen({
    ref: homeRef,
    threshold: 0.4,
    onlyOnce: false,
  });
  const skillsIsIntersected = useNearScreen({
    ref: skillsRef,
    onlyOnce: false,
  });
  const experienceIsIntersected = useNearScreen({
    ref: experienceRef,
    onlyOnce: false,
  });

  useEffect(() => {
    if (homeIsIntersected && updateRoute) {
      setRoutingState({ ...falsyActiveState, Home: true });
      updateRoute('menu-home');
    } else if (skillsIsIntersected && updateRoute) {
      setRoutingState({ ...falsyActiveState, Skills: true });
      updateRoute('menu-skills');
    } else if (experienceIsIntersected && updateRoute) {
      setRoutingState({ ...falsyActiveState, Experience: true });
      updateRoute('menu-experience');
    }
  }, [homeIsIntersected, skillsIsIntersected, experienceIsIntersected]);

  return routingState;
};

export default useIntersectingRouting;
