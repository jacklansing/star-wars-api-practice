import React, { Component } from 'react';
import cuid from 'cuid';

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
      <div className="Search">
        <ul className="Search__results">
          {results.map(result => (
            <li key={cuid()}>{result.name}</li>
          ))}
        </ul>
        {this.state.touched && this.props.results.length === 0 && (
          <p>Apologies, we could find no results for that search.</p>
        )}
      </div>
    );
  }
}
export default SearchResults;
