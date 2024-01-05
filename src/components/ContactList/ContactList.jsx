import React from 'react';
import ContactItem from './ContactItem';
import classes from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={classes.contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
