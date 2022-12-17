import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { TextField, Button,Box } from '@mui/material';
import css from '../Login/Login.module.css';
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name: name, email: email, password: password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Register Page</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id="outlined-basic"
          label="Name"
          variant="standard"
        />
        <TextField
        className={css.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          variant="standard"
        />
        <TextField
        className={css.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          id="outlined-basic"
          label="Password"
          variant="standard"
        />
        <Box textAlign="center" marginTop={10}>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default Register;
