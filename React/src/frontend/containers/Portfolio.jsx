import React from 'react';
import Layout from 'frontend/components/Layout';
import Experience from './Experience';
import Home from './Home';
import Skills from './Skills';

const Portfolio = () => (
  <Layout>
    <>
      <Home />
      <Skills />
      <Experience />
    </>
  </Layout>
);

export default Portfolio;
