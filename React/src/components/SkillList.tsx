import React from 'react';
import { SkillListModel } from '@models/skill-list-model';
import '@styles/components/SkillList.scss';
import Card from './Card';

const SkillList = ({ skills }: SkillListModel): JSX.Element => (
  <div className="SkillList">
    {skills.map((skill) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Card key={skill.id} {...skill} />
    ))}
  </div>
);

export default SkillList;
