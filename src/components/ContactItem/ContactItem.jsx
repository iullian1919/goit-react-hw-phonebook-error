import React from 'react';
import classes from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  return (
    <li className={classes.contactItem}>
      {contact.name} : {contact.number}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.any.isRequired,
};

export default ContactItem;
