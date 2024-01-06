import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import classes from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul className={classes.contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.any.isRequired,
};

export default ContactList;
