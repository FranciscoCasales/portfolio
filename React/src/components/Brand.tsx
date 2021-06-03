import React from 'react';
import '@styles/components/Brand.scss';
import { Pause, WindupChildren } from 'windups';

const Brand = (): JSX.Element => (
  <WindupChildren>
    <div className="Brand">
      <span />
      <Pause ms={500} />
      <span>Fancisco</span>
      <strong className="Brand__lastName">Casales</strong>
    </div>
  </WindupChildren>
);

export default Brand;
