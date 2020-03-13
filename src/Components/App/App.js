import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  setResults = result => {
    this.setState({
      results: result
    });
  };

  getResults = params => {
    fetch('https://swapi.co/api/people/?search=luke')
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        this.setResults(results);
      });
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <header>
          <h1>Star Wars Search</h1>
        </header>
        <SearchForm onSearch={this.getResults} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}
export default App;
