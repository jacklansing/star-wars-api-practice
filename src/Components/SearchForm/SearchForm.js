import React, { Component } from 'react';
import FormValidationError from '../FormValidationError/FormValidationError';
import PropTypes from 'prop-types';
import cuid from 'cuid';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: '',
        touched: false
      },
      category: {
        value: 'people'
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

  updateCategory(category) {
    this.setState({
      category: {
        value: category
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let search = this.state.search.value;
    let category = this.state.category.value;
    const params = `${category}/?search=${search}`;
    this.props.onSearch(params);
  }

  validateSearch() {
    if (this.state.search.value.length === 0) {
      return 'Search is required';
    }
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <form className="Search" onSubmit={e => this.handleSubmit(e)}>
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
          <select
            value={this.state.category.value}
            htmlFor="category"
            onChange={e => this.updateCategory(e.target.value)}
          >
            {categoriesList.map(category => (
              <option value={category} key={cuid()}>
                {category[0].toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          {this.state.error && (
            <p>
              There was an error generating categories, please try again later
            </p>
          )}
        </label>
        <button disabled={this.validateSearch()} type="submit">
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func
};

export default SearchForm;
