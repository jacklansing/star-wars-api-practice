import React, { Component } from 'react';
import cuid from 'cuid';

class SearchResults extends Component {
  static defaultProps = {
    results: []
  };
  render() {
    const { results } = this.props;
    return (
      <div>
        <ul>
          {results.map(result => (
            <li key={cuid()}>{result.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchResults;
