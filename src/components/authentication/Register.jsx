import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest, setMessage } from '../../app/register/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.register);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    dispatch(setMessage(''));
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      dispatch(setMessage('Passwords do not match'));
    } else {
      dispatch(registerRequest({ user: { email: formData.email, password: formData.password } }));
      setFormData({ email: '', password: '', confirmPassword: '' });
    }
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
          <p>Already have an account?</p>
          <Link to="/login">Login now</Link>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <h2 className="center">Sign up</h2>
          <input type="email" name="email" id="email" placeholder="Email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <input type="submit" value="register" className="capitalize btn" />
          <p className="center">{message}</p>
        </form>
      </div>
    </main>
  );
};

export default Register;
