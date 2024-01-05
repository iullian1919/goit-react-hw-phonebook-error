import React from 'react';
import classes from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  return (
    <li className={classes.contactItem}>
      {contact.name} : {contact.number}
    </li>
  );
};

export default ContactItem;
