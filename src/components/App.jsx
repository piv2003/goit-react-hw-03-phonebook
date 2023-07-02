import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList/ContactsList.js';
import { AppBox } from 'components/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(4), name, number }],
    }));
  };

  checkСontact = nameContact => {
    return this.state.contacts.some(
      ({ name: curentName }) => curentName === nameContact
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  notifiesAlert = nameContact => {
    alert(`${nameContact} is already in contacts.`);
  };

  handleSubmit = ({ name: newName, number }) => {
    this.checkСontact(newName)
      ? this.notifiesAlert(newName)
      : this.addContact(newName, number);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <AppBox>
        <h1>PhoneBook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} value={filter} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </AppBox>
    );
  }
}
