import React from 'react';

const ContactForm = ({ name, setName, addContact }) => {
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
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
      <button type="submit">Add Contact</button>
      <h2>Contacts</h2>
    </form>
  );
};

export default ContactForm;
