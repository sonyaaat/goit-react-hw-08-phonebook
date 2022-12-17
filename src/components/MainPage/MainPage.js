import Filter from '../Filter/Filter';
import Spinner from '../Spinner/Spinner';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import ContactsList from '../ContactsList/ContactsList';
import ContactsEditor from 'components/ContactsEditor/ContactsEditor';
import { useSelector } from 'react-redux';
import css from "../MainPage/MainPage.module.css"
const MainPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.wrapper}>
      <ContactsEditor />
      <Filter />
      {isLoading && <Spinner />}
      <ContactsList />
    </div>
  );
};
export default MainPage;
