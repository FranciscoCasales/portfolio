import React from 'react';
import '@styles/components/Layout.scss';
import { ChildrenModel } from '@models/children.model';
import Footer from '@components/Footer';
import Header from '@components/Header';
import SocialNetwork from '@components/SocialNetwork';

const Layout = ({ children }: ChildrenModel): JSX.Element => (
  <div className="Layout default-theme">
    <Header />
    <SocialNetwork />
    {children}
    <Footer />
  </div>
);

export default Layout;
