import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../app/login/loginSlice';

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
    <main className="signin-page">
      <div className="signin-container br">
        <div className="welcome-message">
          <h2>Welcome</h2>
          <br />
          <p>Don&#39;t have an account?</p>
          <Link to="/register">Register now</Link>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <h2 className="center">Login</h2>
          <input type="email" name="email" id="email" placeholder="Email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="submit" value="login" className="capitalize btn" />
        </form>
      </div>
    </main>
  );
};

export default Login;
