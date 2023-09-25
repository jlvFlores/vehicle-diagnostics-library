import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import { loginRequest } from '../../app/signin/signinSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ user: formData }));
    setFormData({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit} method="post">
        <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="submit" value="Login" />
      </form>
    </main>
  );
};

export default Login;
