import React from 'react';
// import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends React.Component {
  onSubmit = FormData => {
    const { query } = FormData;
    console.log(query);

    // const includesName = this.state.contacts.find(
    //   contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    // );

    // if (includesName) {
    //   return Notiflix.Notify.warning(
    //     `${name} is already in contacts`,
    //     notifySettings
    //   );

    // } else {
    //   let contact = { id: nanoid(), name: name, number: number };
    //   this.setState(prevState => ({
    //     contacts: [...prevState.contacts, contact],
    //   }));
    // Notiflix.Notify.success(
    //   `${name} was successfully added to your contacts`,
    //   notifySettings
    // );
    // }
  };

  render() {
    return <Searchbar onSubmit={this.onSubmit} />;
  }
}
