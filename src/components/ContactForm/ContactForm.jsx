import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={classes.contactForm}>
      <form className={classes.contactFormForm} onSubmit={handleSubmit}>
        <label className={classes.contactFormLabel}>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={classes.contactFormLabel}>
          Number
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
