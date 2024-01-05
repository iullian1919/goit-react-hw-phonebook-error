import React from 'react';
import classes from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  addContact,
  filter,
  setFilter,
}) => {
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact();
  };

  return (
    <div className={classes.contactForm}>
      <form className={classes.contactFormForm} onSubmit={handleSubmit}>
        <label className={classes.contactFormLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className={classes.contactFormLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts</h2>
      <div className={classes.contactFormSearch}>
        <label className={classes.contactFormSearchLabel}>
          Find contact by name
          <input
            className={classes.contactFormInput}
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search by name"
          />
        </label>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  setNumber: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ContactForm;
