import React from 'react';
import { TimeLineDetailModel } from '@models/time-line.model';
import '@styles/components/TimeLineDetail.scss';

const TimeLineDetail = ({
  job,
  company,
  period,
  right,
}: TimeLineDetailModel): JSX.Element => (
  <div className={`TimeLineDetail ${right && 'right'}`}>
    <h1>{job}</h1>
    <h2 className="TimeLineDetail__company">{company}</h2>
    <p>{period}</p>
  </div>
);

export default TimeLineDetail;
