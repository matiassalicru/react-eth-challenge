import React, { useEffect, useState } from 'react';
import '../styles/components/Interest.styl';
import getData from '../utils/getData';

const Interest = () => {
  const [interest, setInterest] = useState(Array(3).fill());

  useEffect(async () => {
    const data = await getData('http://localhost:3000/data');
    setInterest(data?.interest);
  }, []);

  return (
    <div className="Interest-container">
      <h1 className="Interest-title">Interest</h1>
      <ul>
        {!!interest?.length &&
          interest.map((int, index) => (
            <li className="Interest-item" key={index}>
              <h3>{int}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Interest;
