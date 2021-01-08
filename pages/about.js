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
      {/* Observation (1): must delete/comment the <Modal> element too */}
      <Modal ariaHideApp={false} isOpen={false}></Modal>
    </>
  );
};

export default AboutPage;
