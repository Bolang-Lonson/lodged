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
  // Setting state to false helps to imply that it is a boolean value which can only switch between true and false
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
      setErrors({...errors});
      return;
    }

    // Perform sign-up logic here
    signUp();
  };

  function signUp() {
    // Add your sign-up code here
  }

  return (
    <div className='p-0 m-0' id="background-art">
		<div className="row justify-content-end align-items-center p-0 m-0" id="form-section">
			<div className="col-md-6 col-lg-4 bg-light h-100 position-relative  shadow px-0 m-0" id="form-box">
				<a href='/' className=' position-absolute top-0 start-0 m-2 text-black fw-semibold btn btn-light'><span className="bi bi-arrow-left-short lead mb-0"> Home</span></a>
				<div className="container pt-5">
					<div className="text-center my-3">
						<img src={drklogo} alt="logo" className="img-fluid" />
					</div>
					<div className="row my-4 my-md-5 justify-content-center">
						<div className="col-md-9 col-10">
							<form onSubmit={handleSubmit}>
								<div className='form-floating my-2 border-start border-black border-3'> 
									<input
										type='text'
										className={`form-control rounded-0 ${errors.name ? 'is-invalid' : ''}`}
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
											/* Making form label move up as we begin input */
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
										className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`}
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
											/* Making form label move up as we begin input */
											...(formData.email && {
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
										className={`form-select rounded-0 ${
										errors.country ? 'is-invalid' : ''
										}`}
										value={formData.country}
										onChange={(e) =>
										setFormData({ ...formData, country: e.target.value })
										}
									>
										<option value=''>+1</option>
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
										className={`form-control rounded-0 ${errors.phone ? 'is-invalid' : ''}`}
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
											/* Making form label move up as we begin input */
											...(formData.phone && {
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
											/* Making form label move up as we begin input */
											...(formData.password && {
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
											/* Making form label move up as we begin input */
											...(formData.confirmPassword && {
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
								className='btn btn-dark mt-2 w-100'
								disabled={!isChecked}
								>
								Create Account
								</button>
								<div className="mt-3">Already have an account? <a href="/login">Login</a></div>
							</form>
						</div>
					</div>
				</div>
				<div className="text-center text-muted w-100 my-5 pt-5">
						<i className="bi bi-c-circle"></i> Lodged Co. 2024
				</div>
			</div>
		</div>
    </div>
  );
};

export default Signup;