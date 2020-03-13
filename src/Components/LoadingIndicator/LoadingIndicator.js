import React from 'react';
import r2d2 from '../../images/r2d2.svg';
import './LoadingIndicator.css';

const LoadingIndicator = props => {
  return (
    <>
      <img className="Loading" src={r2d2} alt="r2 d2 loading indicator" />
    </>
  );
};

export default LoadingIndicator;
