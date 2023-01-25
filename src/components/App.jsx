import React, { Component } from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  formSubmitHandler = data => {
    this.state.contacts.map(el => {
      if (el.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts.`);
      }
      return el.name;
    });
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    this.setState({ filter: data });
  };

  handleClickDelete = data => {
    console.log(data);
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== data),
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} />
        <Contacts
          onDelete={this.handleClickDelete}
          data={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
