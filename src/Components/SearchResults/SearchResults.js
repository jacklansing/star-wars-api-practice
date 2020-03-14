import React, { Component } from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './SearchResults.css';
class SearchResults extends Component {
  static defaultProps = {
    results: [],
    loading: false,
    searchAttempted: false
  };

  render() {
    const { results } = this.props;
    return (
      <div className="Results">
        <ul className="Results__list">
          <TransitionGroup component={null}>
            {results.map(result => {
              const id = cuid();
              return (
                <CSSTransition
                  in={!this.props.loading}
                  key={id}
                  timeout={200}
                  classNames="pop"
                  unmountOnExit
                >
                  <li key={id}>{result.name || result.title}</li>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        {this.props.searchAttempted &&
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

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  searchAttempted: PropTypes.bool
};

export default SearchResults;
