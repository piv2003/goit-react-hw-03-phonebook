import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList/ContactsList.js';
import { AppBox } from 'components/App.styled';
import {
  loadLocalStorage,
  saveLocalStorage,
} from '../LocalStorage/LocalStorage.js';

const LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentMount = () => {
    const contacts = loadLocalStorage(LOCAL_STORAGE_KEY);
    if (contacts) {
      this.setState({ contacts });
      return;
    }
    this.setState({ contacts: [] });
  };

  componentUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      saveLocalStorage(LOCAL_STORAGE_KEY, nextContacts);
    }
  }

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
        {contacts !== undefined && contacts.length > 0 ? (
          <>
            <Filter onChange={this.handleChange} value={filter} />
            <ContactsList
              contacts={contacts}
              filter={filter}
              onDeleteContact={this.onDeleteContact}
            />
          </>
        ) : (
          <p>Contacts list is empty</p>
        )}
      </AppBox>
    );
  }
}
