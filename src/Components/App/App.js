import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import PageNotFound from '../PageNotFound/PageNotFound';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import stormTrooper from '../../images/stormtrooper.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchError: false,
      loading: false
    };
  }

  setResults = result => {
    this.setState({
      results: result
    });
  };

  getResults = params => {
    this.setState({ loading: true });
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
        this.setState({ loading: false });
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
        <Switch>
          <Route exact path="/">
            <header className="Header">
              <h1>Star Wars Search</h1>
              <img src={stormTrooper} alt="storm trooper" />
            </header>
            <main className="Main">
              <SearchForm onSearch={this.getResults} />
              {this.state.loading && <LoadingIndicator />}
              {this.state.searchError ? (
                <p>Oops! Something went wrong. Please try searching again</p>
              ) : (
                <SearchResults
                  loading={this.state.loading}
                  results={this.state.results}
                />
              )}
            </main>
          </Route>
          <Route path="/" render={() => <PageNotFound />} />
        </Switch>
      </div>
    );
  }
}
export default App;
