import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import { Header, Form, Input } from './Searchbar.styled';
import { Btn } from '../Button/Button';
// import { Feedbackbtn } from '../FeedbackBtn/FeedbackBtn';
// import { icons } from './icons';

// const header = document.querySelector('header');

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onInputChange = event => {
    console.log(event.target);
    // console.log(event.target.closest('header'));
    // const header = event.target.closest('header');
    // header.classList.add('');
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit" icon={BsSearch} text="Search" />
          <Input
            value={this.state.query}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
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
