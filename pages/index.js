import React from 'react';

// Observation (2): import react-modal in this module
//import ReactDOM from 'react-dom';

const IndexPage = () => {
  console.info('rendering IndexPage');
  return (
    <>
      <button
        onClick={() => {
          alert('hello');
        }}
      >
        hello
      </button>
    </>
  );
};

export default IndexPage;
