import React from 'react';
import Home from '@containers/Home';
import Layout from '@components/Layout';
import Skills from '@containers/Skills';
import Experience from '@containers/Experience';

const App = (): JSX.Element => (
  <Layout>
    <>
      <Home />
      <Skills />
      <Experience />
    </>
  </Layout>
);

export default App;
