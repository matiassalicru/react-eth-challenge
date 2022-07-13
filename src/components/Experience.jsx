import React, { useEffect, useState } from 'react';
import '../styles/components/Experience.styl';
import getData from '../utils/getData';

const Experience = () => {
  const [experience, setExperience] = useState(Array(3).fill());

  useEffect(async () => {
    const data = await getData('http://localhost:3000/data');
    setExperience(data?.experience);
  }, []);

  return (
    <div className="Experience-container">
      <h1 className="Experience-title">Experience</h1>
      <ul className="Experience-list">
        {!!experience?.length &&
          experience.map((exp, index) => (
            <li className="Experience-item" key={index}>
              <h1 className="Experiente-item_title">{exp?.jobTitle}</h1>
              <div>{exp?.jobDescription}</div>
              <small>Company: {exp?.company}</small>
              <div>
                <small>From: {exp?.startDate}</small> - <small>To: {exp?.endDate}</small>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Experience;
