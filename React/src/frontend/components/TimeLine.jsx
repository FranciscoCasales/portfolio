import React from 'react';
import TimeLineDesc from 'frontend/components/TimeLineDesc';
import TimeLineDetail from 'frontend/components/TimeLineDetail';
import 'frontend/styles/components/TimeLine.scss';

const TimeLine = ({ data }) => (
  <section className="TimeLine">
    <div className="TimeLine__centralLine" />
    {data?.map((experience, i) => (
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
