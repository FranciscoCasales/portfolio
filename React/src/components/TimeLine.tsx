import React from 'react';
import TimeLineDesc from '@components/TimeLineDesc';
import TimeLineDetail from '@components/TimeLineDetail';
import '@styles/components/TimeLine.scss';
import { TimeLineModel } from '@models/time-line.model';

const TimeLine = ({ data }: { data: TimeLineModel[] }): JSX.Element => (
  <section className="TimeLine">
    <div className="TimeLine__centralLine" />
    {data.map((experience, i) => (
      <div key={experience.id} className="TimeLine__element">
        {experience.right ? (
          <TimeLineDetail {...experience} />
        ) : (
          <TimeLineDesc {...experience} />
        )}
        <div className="TimeLine__stepIndicator">{i + 1}</div>
        {experience.right ? (
          <TimeLineDesc {...experience} />
        ) : (
          <TimeLineDetail {...experience} />
        )}
      </div>
    ))}
  </section>
);

export default TimeLine;
