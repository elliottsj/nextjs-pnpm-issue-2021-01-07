import React from 'react';

// Observation (1): delete react-dom import in this module
import ReactDOM from 'react-dom';

const AboutPage = () => {
  console.info('rendering AboutPage');
  return (
    <>
      <button onClick={() => {
        alert('about');
      }}>about</button>
    </>
  );
};

export default AboutPage;
