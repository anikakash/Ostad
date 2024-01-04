import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../assets/css/FullScreenLoader.css';

const Loader = () => {
  return (
    <div className="fullscreen-loader-container">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
