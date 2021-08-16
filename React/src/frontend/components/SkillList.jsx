import React from 'react';
import 'frontend/styles/components/SkillList.scss';
import Card from 'frontend/components/Card';

const SkillList = ({ skills }) => (
  <div className="SkillList">
    {skills.map((skill) => (
      <Card key={skill.id} {...skill} />
    ))}
  </div>
);

export default SkillList;
