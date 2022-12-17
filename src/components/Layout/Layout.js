import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import css from "../Layout/Layout.module.css"
import { clsx } from 'clsx';
const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div>
        <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/">Home</NavLink>
        {isLoggedIn && <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/contacts">Contacts</NavLink>}
        </div>
        {!isLoggedIn && (
          <div>
            <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/login">Login</NavLink>
            <NavLink className={({isActive})=>isActive? clsx(css.link,css.active) :css.link} to="/register">Register</NavLink>
          </div>
        )}
        
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
};
export default Layout;
