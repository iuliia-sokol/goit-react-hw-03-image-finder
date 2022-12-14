import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';

import { Header, Form, Input } from './Searchbar.styled';
import { Btn } from '../Button/Button';
import { notifySettings } from '../fetch';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onInputChange = event => {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return Notiflix.Notify.warning(
        'Please enter key words for search.',
        notifySettings
      );
    }
    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit" icon={BsSearch} text="Search" status="search" />
          <Input
            value={this.state.query}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
