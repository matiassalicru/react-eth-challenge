import React, { useEffect, useState } from 'react';
import '../styles/components/Academic.styl';
import getData from '../utils/getData';

const Academic = () => {
  const [Academic, setAcademic] = useState(Array(3).fill());

  useEffect(async () => {
    const data = await getData('http://localhost:3000/data');
    setAcademic(data?.Academic);
  }, []);

  return (
    <div className="Academic-container">
      <h1 className="Academic-title">Academic</h1>
      <ul>
        {!!Academic?.length &&
          Academic.map((aca, index) => {
            return (
              <li className="Academic-item" key={index}>
                <h3>{aca?.degree}</h3>
                <p>{aca?.description}</p>
                <small>Institution: {aca?.institution}</small>
                <div>
                  <small>From: {aca?.startDate}</small> - <small>To: {aca?.endDate}</small>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Academic;
