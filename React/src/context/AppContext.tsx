import React, { useState } from 'react';
import { ChildrenModel } from '@models/children.model';
import { AppContextModel } from '@models/context.model';
import useLocalStorage from '@hooks/useLocalStorage';
import useUpdateRef from '@hooks/useUpdateRef';

const AppContext = React.createContext<AppContextModel>({
  updateRoute: () => {},
});

export function AppContextProvider({ children }: ChildrenModel): JSX.Element {
  const [route, setRoute] = useLocalStorage('route', 'menu-home');
  const [activeRoute, setActiveRoute] = useState(route);
  const updateRoute = (r: string) => {
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
