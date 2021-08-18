import React, { useMemo, useRef } from 'react';
import 'frontend/styles/components/SkillList.scss';
import Card from 'frontend/components/Card';
import useNearScreen from 'frontend/hooks/useNearScreen';

const SkillList = ({ skills }) => {
  const skillListRef = useRef(null);
  const skillListMemoRef = useMemo(() => skillListRef, []);
  const isIntersected = useNearScreen({ ref: skillListMemoRef });
  return (
    <div
      className={`SkillList ${isIntersected && 'intersected'}`}
      ref={skillListRef}
    >
      {skills.map((skill) => (
        <Card key={skill.id} {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
