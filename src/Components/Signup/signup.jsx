import React, { useState } from 'react';
import countries from './countrycodes.json';
import drklogo from '../../Assets/Images/other/logo-char.png';
import '../Login/login.css';

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
    <div className='container body'>
      <div className='row pt-4 text-center'>
        <div className='col'>
          <img 
            src={drklogo} 
            alt='...' 
            className='img-fluid'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-11 col-md-8 col-lg-5 mx-auto mt-0 form_box container'>
          <div className='row'>
            <div className='col-8 mx-auto'><h1 className="text-center mb-3">Signup</h1></div>
          </div>
          <div className='row'>
            <form onSubmit={handleSubmit} className='col-9 mx-auto mt-1'>
              <div className='form-floating my-2'> 
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
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name}</div>
                )}
              </div>
              <div className='form-floating my-2'>
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
                  {errors.phone && (
                    <div className='invalid-feedback'>{errors.phone}</div>
                  )}
                </div>
              </div>
              <div className='form-floating my-2'>
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
                {errors.password && (
                  <div className='invalid-feedback'>{errors.password}</div>
                )}
              </div>
              <div className='form-floating my-2'>
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
      </div>
      <div className='row text-center '>
        <p className="form-group text-body-secondary">&copy; Lodged.com 2024</p>
      </div>
    </div>
  );
};

export default Signup;