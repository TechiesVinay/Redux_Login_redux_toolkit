import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/reducers/authSlice'; 
import { Link } from 'react-router-dom';
import { SIGNUP_PAGE_ROUTE } from '../../routers/Index';
import { useTranslation } from 'react-i18next';


const LoginPage = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading); // Using auth instead of login
  const error = useSelector(state => state.auth.error); // Using auth instead of login

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginRequest(formData)); // Dispatching authRequest from authSlice
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="mt-4" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px' }}>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder={t('Email')} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder={t('Password')} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>{t('Login')}</button>
        {error && <p className="text-danger mt-2">{error}</p>}
        <Link to={`/${SIGNUP_PAGE_ROUTE}`}>
          <p style={{ color: "black", marginTop: "20px" }}>{t("Don't have an account? Sign up")}</p> 
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
