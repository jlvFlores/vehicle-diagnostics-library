import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import Header from './Header';
import { signinRequest } from '../app/signin/signinSlice';

const SignInForm = ({ actionType }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { isSignedIn } = useSelector((store) => store.signin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinRequest({ route: actionType, data: { user: formData } }));
    setFormData({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return isSignedIn
    ? <Navigate to="/" replace />
    : (
      <main>
        <Header />
        <form onSubmit={handleSubmit} method="post">
          <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="submit" value={actionType} className="capitalize" />
        </form>
      </main>
    );
};

SignInForm.propTypes = {
  actionType: PropTypes.string.isRequired,
};

export default SignInForm;
