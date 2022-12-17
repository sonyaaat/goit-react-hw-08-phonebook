import { useDispatch, useSelector } from 'react-redux';
import css from '../ContactsEditor/ContactsEditor.module.css';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/contacts-selectors';
import { useState } from 'react';
const ContactsEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    const object = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContact(object));
    form.reset();
    reset();
  };
  return (
    <form className={css.form__add} onSubmit={handleSubmit}>
      <div className={css.form__field}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={css.form__field}>
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          value={number}
          onChange={handleChange}
        />
      </div>
      <button className={css.form__button} disabled={isLoading} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsEditor;
