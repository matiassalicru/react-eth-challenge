import React from 'react';
import '../styles/components/About.styl';

const About = ({ data = {} }) => {
  const { name, profession, phone, email, website, address, avatar } = data;
  return (
    <div className="about-container">
      <img src={avatar} className="profile-image" />
      <div className="Header-contact-container">
        <div>
          <h1 className="About-title"> {profession} </h1>
        </div>
        <div className="Header-contact-content">
          <p className="About-item"> Phone: {phone} </p>
          <p className="About-item"> Email: {email} </p>
          <p className="About-item">
            Website: <a href={website}>{name}</a>{' '}
          </p>
          <p className="About-item"> Address: {address}. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
