import React from 'react';
import TimeLine from '@components/TimeLine';
import '@styles/containers/Experience.scss';
import experienceJson from '../assets/data/experience.json';

const Experience = (): JSX.Element => (
  <div className="Experience">
    <h1>Experiencia</h1>
    <TimeLine data={experienceJson.data} />
  </div>
);

export default Experience;
