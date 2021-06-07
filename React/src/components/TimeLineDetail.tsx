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
    <h3>{job}</h3>
    <p className="TimeLineDetail__company">{company}</p>
    <p>{period}</p>
  </div>
);

export default TimeLineDetail;
