import css from '../ContactsList/ContactsList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);
  const filterLow = filter.toLowerCase();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterLow)
  );

  return visibleContacts.length === 0 && contacts.length !== 0 ? (
    <h2 className={css.notify}>There isn`t such contact</h2>
  ) : (
    contacts.length > 0 && (
      <>
        <h1 className="title">Contacts</h1>
        <ul className={css.list}>
          {contacts &&
            visibleContacts.map(contact => (
              <ContactItem key={contact.id} item={contact} />
            ))}
        </ul>
      </>
    )
  );
};
export default ContactsList;
