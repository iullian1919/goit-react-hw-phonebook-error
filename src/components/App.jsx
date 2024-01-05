import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const addContact = () => {
    const newContact = {
      id: nanoid(),
      name: name,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm name={name} setName={setName} addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
