import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
      <p className="loading-text">LOADING DUPLOHACKS<span className="dot-animation">...</span></p>
    </div>
  );
};

export default LoadingScreen; 