import React, { useRef } from 'react';
import { TimeLineDescModel } from '@models/time-line.model';
import '@styles/components/TimeLineDesc.scss';
import useNearScreen from '@hooks/useNearScreen';

const TimeLineDesc = ({ desc }: TimeLineDescModel): JSX.Element => {
  const timeLineDescRef = useRef(null);
  const isIntersected = useNearScreen({ ref: timeLineDescRef });
  return (
    <div
      ref={timeLineDescRef}
      className={`TimeLineDesc ${isIntersected && 'intersected'}`}
    >
      <p>{desc}</p>
    </div>
  );
};

export default TimeLineDesc;
