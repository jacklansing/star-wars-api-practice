import React, { Component } from 'react';
import cuid from 'cuid';
import './SearchResults.css';
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      touched: true
    });
  }

  static defaultProps = {
    results: []
  };
  render() {
    const { results } = this.props;
    return (
      <div className="Results">
        <ul className="Results__list">
          {results.map(result => (
            <li key={cuid()}>{result.name || result.title}</li>
          ))}
        </ul>
        {this.state.touched &&
          this.props.results.length === 0 &&
          !this.props.loading && (
            <p className="Results__noresult">
              Apologies, we could find no results for that search.
            </p>
          )}
      </div>
    );
  }
}
export default SearchResults;
