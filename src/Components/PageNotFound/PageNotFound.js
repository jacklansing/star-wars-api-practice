import React from 'react';
import './PageNotFound.css';
import stressedTrooper from '../../images/trooper_sweat.svg';
import { Link } from 'react-router-dom';

const PageNotFound = props => {
  return (
    <div className="PageNotFound">
      <header className="Header">
        <h1>Star Wars Search</h1>
        <img src={stressedTrooper} alt="storm trooper" />
        <h2>404 Page Not Found</h2>
        <p>Sorry about that, but it looks like this page doesn't exist.</p>
        <p>
          Try clicking <Link to="/">here</Link> to go back home.
        </p>
      </header>
    </div>
  );
};

export default PageNotFound;
