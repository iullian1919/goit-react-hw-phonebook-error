import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact, setName, setNumber }) => {
  const [name, setNameLocal] = useState('');
  const [number, setNumberLocal] = useState('');

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
            id="formular"
            name="iulian"
            value={name}
            onChange={e => {
              setNameLocal(e.target.value);
              setName(e.target.value);
            }}
          />
        </label>
        <label className={classes.contactFormLabel}>
          Number
          <input
            type="text"
            id="1919"
            name="007"
            value={number}
            onChange={e => {
              setNumberLocal(e.target.value);
              setNumber(e.target.value);
            }}
          />
        </label>
        <button className={classes.contactFormButton} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
};

export default ContactForm;
