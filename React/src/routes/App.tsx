import React from 'react';
import Home from '@containers/Home';
import Layout from '@components/Layout';
import Skills from '@containers/Skills';
import Experience from '@containers/Experience';
import { AppContextProvider } from '@context/AppContext';

const App = (): JSX.Element => (
  <AppContextProvider>
    <Layout>
      <>
        <Home />
        <Skills />
        <Experience />
      </>
    </Layout>
  </AppContextProvider>
);

export default App;
