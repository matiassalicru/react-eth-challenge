import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState(null);
  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/data' : null;

  useEffect(async () => {
    const allData = await getData(URL);
    setData(allData);
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <Header data={data}>
            <About data={data} />
          </Header>
          <Profile data={data} />
          <Experience data={data} />
          <div className="grid-content">
            <Academic />
            <Skills />
            <Interest />
            <Languages />
          </div>
        </>
      )}
    </>
  );
};

export default App;
