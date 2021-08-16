import React, { useContext } from 'react';
import 'frontend/styles/components/Layout.scss';
import Footer from 'frontend/components/Footer';
import Header from 'frontend/components/Header';
import SocialNetwork from 'frontend/components/SocialNetwork';
import { Helmet } from 'react-helmet';
import AppContext from 'frontend/context/AppContext';
import {
  PAGE_SUBTITLE,
  PAGE_TITLE,
} from 'frontend/constants/general.constants';

const Layout = ({ children }) => {
  const { activeRoute } = useContext(AppContext);
  return (
    <div className="Layout default-theme">
      <Helmet>
        <title>{PAGE_TITLE.get(activeRoute || 'menu-home')}</title>
        <meta
          name="description"
          content={PAGE_SUBTITLE.get(activeRoute || 'menu-home')}
        />
      </Helmet>
      <Header />
      <SocialNetwork />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
