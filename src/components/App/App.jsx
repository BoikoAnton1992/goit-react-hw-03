import { useState, useEffect } from 'react';
import initialContact from '../../data/contact.json';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContact;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContact => {
      console.log(newContact);
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.appContainer}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contact={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}
