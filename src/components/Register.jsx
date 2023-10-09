import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../app/register/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    dispatch(registerRequest({ user: { email: formData.email, password: formData.password } }));
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" autoComplete="email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        <input type="submit" value="register" className="capitalize" />
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to="/login">Login now</Link>
      </div>
    </main>
  );
};

export default Register;
