import React from 'react';
import TimeLine from 'frontend/components/TimeLine';
import 'frontend/styles/containers/Experience.scss';
import { PAGES } from 'frontend/constants/general.constants';
import useMenuRef from 'frontend/hooks/useMenuRef';

const Experience = () => {
  const experienceRef = useMenuRef(PAGES.EXPERIENCE);
  let experienceJson = {};
  if (global?.window) {
    experienceJson = window.__PRELOAD_STATE__;
  }
  return (
    <div ref={experienceRef} className="Experience" id="Experience">
      <h1>Experiencia</h1>
      <TimeLine data={experienceJson.data} />
    </div>
  );
};

export default Experience;
