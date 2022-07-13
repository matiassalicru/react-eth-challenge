import React, { useEffect, useState } from 'react';
import '../styles/components/Skills.styl';
import getData from '../utils/getData';

const Skills = () => {
  const [skills, setSkills] = useState(Array(3).fill());

  useEffect(async () => {
    const data = await getData('http://localhost:3000/data');
    setSkills(data?.skills);
  }, []);
  return (
    <div className="Skills-container">
      <h1 className="Skills-title">Skills</h1>
      <ul>
        {!!skills?.length &&
          skills.map((skill, index) => {
            const percent = skill?.percentage.slice(0, skill?.percentage.length - 1);
            return (
              <li className="Skills-item" key={index}>
                <h3>{skill?.name}</h3>
                <progress value={percent} max="100" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Skills;
