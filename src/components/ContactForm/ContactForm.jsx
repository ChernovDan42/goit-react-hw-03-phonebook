import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  saveContact = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.ContactForm} onSubmit={this.saveContact}>
        <label htmlFor="nameInput" className={css.label}>
          Name
        </label>
        <input
          id="nameInput"
          className={css.ContactFormInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.onChangeInput}
          required
        />

        <label htmlFor="phoneInput" className={css.label}>
          Number
        </label>
        <input
          className={css.ContactFormInput}
          id="phoneInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.onChangeInput}
          required
        />

        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
