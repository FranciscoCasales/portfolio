import React, { useContext } from 'react';
import '@styles/components/Layout.scss';
import { ChildrenModel } from '@models/children.model';
import Footer from '@components/Footer';
import Header from '@components/Header';
import SocialNetwork from '@components/SocialNetwork';
import { Helmet } from 'react-helmet';
import AppContext from '@context/AppContext';
import { PAGE_TITLE } from '@constants/general.constants';

const Layout = ({ children }: ChildrenModel): JSX.Element => {
  const { activeRoute } = useContext(AppContext);
  return (
    <div className="Layout default-theme">
      <Helmet>
        <title>{`Portfolio ${PAGE_TITLE.get(
          activeRoute || 'menu-home'
        )}`}</title>
      </Helmet>
      <Header />
      <SocialNetwork />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
