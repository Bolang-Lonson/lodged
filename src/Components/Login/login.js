import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import './login.css';
import drklogo from '../../Assets/Images/other/logo-char.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.email) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Perform sign-in logic here
    signIn();
  };

  function signIn() {
    // Add your sign-in code here
  }

  return (
    <div className='container'>
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
        <div className='col-12 col-md-8 col-lg-5 mx-auto mt-0 form_box container'>
          <div className='row'>
            <div className='col-8 mx-auto'><h1 className="text-center mb-3">Login</h1></div>
          </div>
          <div className='row'>
            <form onSubmit={handleSubmit} className='col-9 mx-auto mt-4'>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" 
                    style={{
                        // position: 'absolute',
                        pointerEvents: 'none',
                        // top: '50%',
                        // transform: 'translateY(-50%)',
                        transition: 'all 0.3s ease',
                        ...(formData.name && {
                          top: 0,
                          fontSize: '12px',
                          color: '#555',
                        }),
                      }}
                >Email address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />{errors.email && <div className="invalid-feedback">{errors.email}</div>}
                <div id="emailHelp" className="form-text">Enter a valid email address.</div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" 
                    style={{
                        // position: 'absolute',
                        pointerEvents: 'none',
                        // top: '50%',
                        // transform: 'translateY(-50%)',
                        transition: 'all 0.3s ease',
                        ...(formData.name && {
                          top: 0,
                          fontSize: '12px',
                          color: '#555',
                        }),
                      }}
                >Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="exampleInputPassword1"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="form-group mb-3 form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rem-check"
                />
                <label className="form-check-label" htmlFor="rem-check">Remember me</label>
              </div>
              <button type="submit" className="btn btn-outline-success px-5">Login</button>
              <div className='form-text pt-1'>Don't have an account? <a href='/signup'>Signup</a></div>
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

export default Login;