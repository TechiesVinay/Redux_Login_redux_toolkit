import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../../redux/reducers/authSlice'; // Using authSlice instead of SignUpSlice
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE } from '../../routers/Index';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading); // Using auth instead of sign
  const error = useSelector(state => state.auth.error); // Using auth instead of sign

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    // Display toast if error occurs
    if (error) {
      showToast(error, 'error');
    }
  }, [error]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupRequest(formData));
  };

  // Function to show toast notification
  const showToast = (message, type) => {
    toast[type](message);
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-4" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px' }}>
        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder={t('Username')} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder={t('Email')} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder={t('Password')} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>{t('Sign Up')}</button>
        <Link to={`/${LOGIN_PAGE_ROUTE}`}>
          <p style={{ color: "black", marginTop: "20px" }}>{t('Already have an account? Sign in')}</p>
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
