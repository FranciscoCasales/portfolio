import React from 'react';
import Brand from '@components/Brand';
import '@styles/components/Footer.scss';

const Footer = (): JSX.Element => (
  <footer className="Footer" data-testid="Footer">
    <Brand />
  </footer>
);

export default Footer;
