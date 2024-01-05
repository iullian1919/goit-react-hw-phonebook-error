import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = () => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        addContact={addContact}
      />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
