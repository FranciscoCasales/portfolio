import React, { useMemo, useRef } from 'react';
import 'frontend/styles/components/TimeLineDesc.scss';
import useNearScreen from 'frontend/hooks/useNearScreen';

const TimeLineDesc = ({ desc }) => {
  const timeLineDescRef = useRef(null);
  const timeLineMemoDescRef = useMemo(() => timeLineDescRef, []);
  const isIntersected = useNearScreen({ ref: timeLineMemoDescRef });
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
