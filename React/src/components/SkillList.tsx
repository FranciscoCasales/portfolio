import React, { useRef } from 'react';
import { SkillListModel } from '@models/skill-list.model';
import '@styles/components/SkillList.scss';
import Card from '@components/Card';
import useNearScreen from '@hooks/useNearScreen';

const SkillList = ({ skills }: SkillListModel): JSX.Element => {
  const skillListRef = useRef(null);
  const isIntersected = useNearScreen({ ref: skillListRef });
  return (
    <div
      ref={skillListRef}
      className={`SkillList ${isIntersected && 'intersected'}`}
    >
      {skills.map((skill) => (
        <Card key={skill.id} {...skill} />
      ))}
    </div>
  );
};

export default SkillList;
