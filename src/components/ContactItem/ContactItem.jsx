import React from 'react';
import classes from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={classes.contactItem}>
      {contact.name} : {contact.number}
      <button className={classes.contactItemButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
