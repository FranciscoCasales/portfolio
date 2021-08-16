import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from 'frontend/context/AppContext';
import Portfolio from 'frontend/containers/Portfolio';

const App = () => (
  <BrowserRouter>
    <AppContextProvider>
      <Switch>
        <Route exact path="/" component={Portfolio} />
      </Switch>
    </AppContextProvider>
  </BrowserRouter>
);

export default App;
