import React, { useState } from 'react';
import countries from './countrycodes.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import drklogo from '../../Assets/Images/other/logo-char.png';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required.';
    }

    if (!formData.email) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.country) {
      errors.country = 'Country is required.';
    }

    if (!formData.phone) {
      errors.phone = 'Telephone number is required.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (!isChecked) {
      errors.terms = 'Please agree to the terms and conditions.';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Perform sign-up logic here
    signUp();
  };

  function signUp() {
    // Add your sign-up code here
  }

  return (
    <div>
      <div className='logo-box pt-4'>
        <img src={drklogo} alt='...' />
      </div>
      <div className='container-sm box'>
        <h1 className='text-center mb-3'>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-floating my-2'>
            <label htmlFor='name' 
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    ...(formData.name && {
                      top: 0,
                      fontSize: '12px',
                      color: '#555',
                    }),
                  }}
            >
                Name</label>
            <input
              type='text'
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id='name'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <div className='invalid-feedback'>{errors.name}</div>
            )}
          </div>
          <div className='form-floating my-2'>
            <label htmlFor='email' 
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    ...(formData.name && {
                      top: 0,
                      fontSize: '12px',
                      color: '#555',
                    }),
                  }}
            >Email</label>
            <input
              type='email'
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <div className='invalid-feedback'>{errors.email}</div>
            )}
          </div>
          <div className='form-floating my-2 telly'>
            <select
              id='country-selector'
              name='country'
              className={`form-select ${
                errors.country ? 'is-invalid' : ''
              }`}
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              <option value=''>Country Code</option>
              {countries.map((country, index) => (
                <option key={index} value={country.dial_code}>
                  {country.dial_code} - {country.name}({country.code})
                </option>
              ))}
            </select>
            {errors.country && (
              <div className='invalid-feedback'>{errors.country}</div>
            )}
            <div className='form-floating number'>
              <label htmlFor='phone' 
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    ...(formData.name && {
                      top: 0,
                      fontSize: '12px',
                      color: '#555',
                    }),
                  }}
              >Telephone Number</label>
              <input
                type='tel'
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id='phone'
                name='phone'
                placeholder='Enter your telephone number'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <div className='invalid-feedback'>{errors.phone}</div>
              )}
            </div>
          </div>
          <div className='form-floating my-2'>
            <label htmlFor='password'
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    ...(formData.name && {
                      top: 0,
                      fontSize: '12px',
                      color: '#555',
                    }),
                  }}
            >Password</label>
            <input type='password'
              className={`form-control ${
                errors.password ? 'is-invalid' : ''
              }`}
              id='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <div className='invalid-feedback'>{errors.password}</div>
            )}
          </div>
          <div className='form-floating my-2'>
            <label htmlFor='confirmPassword'
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: 'all 0.3s ease',
                    ...(formData.name && {
                      top: 0,
                      fontSize: '12px',
                      color: '#555',
                    }),
                  }}
            >Confirm Password</label>
            <input
              type='password'
              className={`form-control ${
                errors.confirmPassword ? 'is-invalid' : ''
              }`}
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <div className='invalid-feedback'>
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <div className='form-check my-3'>
            <input
              type='checkbox'
              className={`form-check-input ${
                errors.terms ? 'is-invalid' : ''
              }`}
              id='rem-check'
              checked={isChecked}
              onChange={handleCheck}
            />
            <label className='form-check-label' htmlFor='rem-check'>
              I have read and agree to the{' '}
              <a href='/termsandcoditions'>terms and conditions</a>
            </label>
            {errors.terms && (
              <div className='invalid-feedback'>{errors.terms}</div>
            )}
          </div>
          <button
            type='submit'
            className='btn btn-primary mt-2'
            disabled={!isChecked}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;