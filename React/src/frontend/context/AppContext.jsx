import React, { useState, createContext } from 'react';
import useLocalStorage from 'frontend/hooks/useLocalStorage';
import useUpdateRef from 'frontend/hooks/useUpdateRef';

const AppContext = createContext({
  updateRoute: () => {},
});

export function AppContextProvider({ children }) {
  const [route, setRoute] = useLocalStorage('route', 'menu-home');
  const [activeRoute, setActiveRoute] = useState(route);
  const updateRoute = (r) => {
    setRoute(r);
    setActiveRoute(r);
  };
  const [refs, updateRef] = useUpdateRef();

  return (
    <AppContext.Provider
      value={{ ...refs, updateRef, activeRoute, updateRoute }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
