import React, { useEffect, useState } from 'react';
import '../styles/components/Languages.styl';
import getData from '../utils/getData';

const Languages = () => {
  const [languages, setLanguages] = useState(Array(3).fill());

  useEffect(async () => {
    const data = await getData('http://localhost:3000/data');
    setLanguages(data?.languages);
  }, []);

  return (
    <div className="Languages-container">
      <h1 className="Languages-title">Languages</h1>
      <ul>
        {!!languages.length &&
          languages.map((language, index) => {
            const percent = language?.percentage.slice(0, language?.percentage.length - 1);
            return (
              <li className="Languages-item" key={index}>
                <h3>{language?.name}</h3>
                <progress value={percent} max="100" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Languages;
