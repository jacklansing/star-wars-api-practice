import React, { Component } from 'react';
import FormValidationError from '../FormValidationError/FormValidationError';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: '',
        touched: false
      },
      categoriesList: [],
      catError: null
    };
  }

  componentDidMount() {
    this.generateCategories();
  }

  generateCategories() {
    const categories = [];
    fetch('https://swapi.co/api/')
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        for (const keys in data) {
          categories.push(keys);
        }
        this.setState({
          categoriesList: categories
        });
      })
      .catch(error => this.setState({ error }));
  }

  updateSearch(search) {
    this.setState({
      search: {
        value: search,
        touched: true
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch();
  }

  validateSearch() {
    if (this.state.search.value.length === 0) {
      return 'Please enter some type of search ;)';
    }
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="search">
          Search:
          <input
            type="text"
            id="search"
            name="search"
            onChange={e => this.updateSearch(e.target.value)}
          />
        </label>
        {this.state.search.touched && (
          <FormValidationError message={this.validateSearch()} />
        )}
        <label htmlFor="options">
          Category:
          <select htmlFor="category">
            {categoriesList.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          {this.state.error && (
            <p>There was an generating categories, please try again later</p>
          )}
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default SearchForm;
