import React from 'react';
import { TimeLineDescModel } from '@models/time-line.model';
import '@styles/components/TimeLineDesc.scss';

const TimeLineDesc = ({ desc }: TimeLineDescModel): JSX.Element => (
  <div className="TimeLineDesc">
    <p>{desc}</p>
  </div>
);

export default TimeLineDesc;
