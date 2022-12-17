import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { TextField, Button, Box } from '@mui/material';
import css from '../Login/Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Login Page</h1>

      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={css.input}
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <TextField
          className={css.input}
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Box textAlign="center" marginTop={10}>
          <Button variant="contained" type="submit">
            LogIn
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default Login;
