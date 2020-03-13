import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import woundedTrooper from '../../images/trooper_wounded.svg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="PageNotFound">
          <header className="Header">
            <h1>Star Wars Search</h1>
            <img src={woundedTrooper} alt="storm trooper" />
            <h2>Uff! An error occurred.</h2>
            <p>Sorry about that, but this page ran into a serious error.</p>
            <p>Please try refreshing the page.</p>
          </header>
        </div>
      );
    } else return this.props.children;
  }
}
export default ErrorBoundary;
