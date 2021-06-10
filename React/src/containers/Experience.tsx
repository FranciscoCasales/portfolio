import React from 'react';
import TimeLine from '@components/TimeLine';
import '@styles/containers/Experience.scss';
import experienceJson from '@data/experience.json';
import { PAGES } from '@constants/general.constants';
import useMenuRef from '@hooks/useMenuRef';

const Experience = (): JSX.Element => {
  const experienceRef = useMenuRef(PAGES.EXPERIENCE);
  return (
    <div ref={experienceRef} className="Experience" id="Experience">
      <h1>Experiencia</h1>
      <TimeLine data={experienceJson.data} />
    </div>
  );
};

export default Experience;
