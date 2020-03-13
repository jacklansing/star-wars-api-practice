import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: '',
        touched: false,
      },
    };
  }
  render() {
    return (
      <form>
        <label htmlFor="search">
          <input type="text" id="search" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default SearchForm;
