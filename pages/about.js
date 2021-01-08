import React from 'react';

// Observation (1): delete react-modal import in this module
import Modal from 'react-modal';

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
