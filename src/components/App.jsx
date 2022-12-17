import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Register/Register';
import PublicRoute from './PublicRoute';
import PrivateRoute from 'PrivateRoute';
import Home from './Home/Home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from '../redux/auth/auth-selectors';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshing && (
        <div className="container">
          <Layout />
          <Routes>
            <Route
              path="/"
              index
              element={<PublicRoute component={<Home />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<MainPage />} />}
            />
            <Route
              path="/login"
              element={<PublicRoute restricted component={<Login />} />}
            />
            <Route
              path="/register"
              element={<PublicRoute restricted component={<Register />} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
