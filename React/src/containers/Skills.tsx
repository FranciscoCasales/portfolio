import React from 'react';
import SkillList from '@components/SkillList';
import '@styles/containers/Skills.scss';
import {
  BACKEND_SKILLS,
  FRONTEND_SKILLS,
  OTHER_SKILLS,
} from '@constants/skills.constants';
import { PAGES } from '@constants/general.constants';
import useMenuRef from '@hooks/useMenuRef';

const Skills = (): JSX.Element => {
  const skillsRef = useMenuRef(PAGES.SKILLS);
  return (
    <div ref={skillsRef} className="Skills" id="Skills">
      <h2>Habilidades FrontEnd</h2>
      <SkillList skills={FRONTEND_SKILLS} />
      <h2>Habilidades Backend</h2>
      <SkillList skills={BACKEND_SKILLS} />
      <h2>Otras Habilidades</h2>
      <SkillList skills={OTHER_SKILLS} />
    </div>
  );
};

export default Skills;
