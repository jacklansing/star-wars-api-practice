import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import stormTrooper from '../../images/stormtrooper.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchError: false
    };
  }

  setResults = result => {
    this.setState({
      results: result
    });
  };

  getResults = params => {
    fetch(`https://swapi.co/api/${params}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        this.setState({ searchError: false });
        const { results } = data;
        this.setResults(results);
      })
      .catch(error => {
        this.setState({ searchError: error });
      });
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <header className="Header">
          <h1>Star Wars Search</h1>
          <img src={stormTrooper} alt="storm trooper" />
        </header>
        <main className="Main">
          <SearchForm onSearch={this.getResults} />
          {this.state.searchError ? (
            <p>Oops! Something went wrong. Please try searching again</p>
          ) : (
            <SearchResults results={this.state.results} />
          )}
        </main>
      </div>
    );
  }
}
export default App;
