import css from '../Filter/Filter.module.css';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { changeValue } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const onChange = evt => {
    dispatch(changeValue(evt.target.value));
  };
  return (
    <div className={css.filter__box}>
      <label className={css.find} htmlFor="find">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="find"
        value={filterValue}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Filter;
