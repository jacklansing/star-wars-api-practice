import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import queryUtils from '../../queryUtils';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Star Wars Search</h1>
        </header>
        <SearchForm />
        {queryUtils.getRoot()}
      </div>
    );
  }
}
export default App;
