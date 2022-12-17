import css from '../ContactItem/ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const isLoading = useSelector(selectIsLoading);
  return (
    <li className={css.item}>
      <p className={css.name}>{item.name}: </p>
      <p className={css.number}>{item.number}</p>
      <button
        className={css.button}
        disabled={isLoading}
        type="button"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
export default ContactItem;
