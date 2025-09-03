import React, { useState } from 'react';
import countries from './countrycodes.json';
import drklogo from '../../Assets/Images/other/logo-char.png';
import '../Login/login.css';
import Modal from './modal';

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
			<div className="col-md-6 col-lg-6 bg-light h-100 position-relative  shadow px-0 m-0" id="form-box">
				<a href='/' className=' position-absolute top-0 start-0 m-3 text-primary text-decoration-none'><span className="bi bi-chevron-left mb-0"> Home</span></a>
				<div className="container pt-5">
					<div className="text-center my-3">
						<img src={drklogo} alt="logo" className="img-fluid" />
					</div>
					<div className="row my-4 my-md-5 justify-content-center">
						<div className="col-md-6 col-10">
							<form onSubmit={handleSubmit} id='signup-form'>
								<div className='form-floating my-2 border-start border-charcoal border-3'> 
									<input
										type='text'
										className={`form-control border-2 border-start-0 rounded-0 focus-ring ${errors.name ? 'is-invalid' : ''}`}
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
								<div className='form-floating my-2 border-start border-charcoal border-3'>
									<input
										type='email'
										className={`form-control border-2 border-start-0 rounded-0 focus-ring ${errors.email ? 'is-invalid' : ''}`}
										id='signup-email' name='email'
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
										className={`form-select rounded-0 pt-2 border-2 focus-ring ${
										errors.country ? 'is-invalid' : ''
										}`}
										value={formData.country}
										onChange={(e) =>
										setFormData({ ...formData, country: e.target.value })
										}
									>
										<option value=''>{`${countries[0].emoji} ${countries[0].dial_code}`}</option>
										{countries.map((country, index) => (
										<option key={index} value={country.dial_code}>
											{country.name}({country.code}) <span className="text-muted">{country.dial_code}</span>
										</option>
										))}
									</select>
									{errors.country && (
										<div className='invalid-feedback'>{errors.country}</div>
									)}
									<div className='form-floating number'>
										<input
										type='tel'
										className={`form-control border-2 rounded-0 focus-ring ${errors.phone ? 'is-invalid' : ''}`}
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
								<div className='form-floating my-2 border-start border-charcoal border-3'>
									<input type='password'
										className={`form-control border-2 border-start-0 rounded-0 focus-ring ${
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
								<div className='form-floating my-2 border-start border-charcoal border-3'>
									<input
										type='password'
										className={`form-control border-2 border-start-0 rounded-0 focus-ring ${
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
								<div className='form-check my-4'>
									<input
										type='checkbox'
										className={`form-check-input focus-ring ${
										errors.terms ? 'is-invalid' : ''
										}`}
										id='rem-check'
										checked={isChecked}
										onChange={handleCheck}
									/>
									<label className='form-check-label' htmlFor='rem-check'>
										I have read and agree to the{' '}
										<a href='#terms-n-coditions'
											className=' text-decoration-none'
											role='button'
											aria-controls='terms-n-conditions'
											data-bs-target='#terms-n-conditions'
											data-bs-toggle='modal'
										>terms and conditions</a>
									</label>
									{errors.terms && (
										<div className='invalid-feedback'>{errors.terms}</div>
									)}
								</div>
								<button
								type='submit'
								className='btn btn-charcoal mt-2 w-100'
								disabled={!isChecked}
								>
								Create Account
								</button>
								<div className="mt-3">
									Already have an account? 
									<a href="/login" 
										className=' text-decoration-none'
									> Login</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="text-center text-muted w-100 my-5 pt-5">
						<i className="bi bi-c-circle"></i> Lodged Co. 2024
				</div>
			</div>
		</div>
		<Modal id='terms-n-conditions'
			title = 'Terms and Conditions'
			scrollable = {true}
			body = {() => (
				<>
				<div className="p-4 border border-black-subtle mx-md-4 bg-white border-1">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus nostrum illo eveniet sequi odio autem itaque tenetur tempore. Fuga nemo, aperiam minima numquam, error accusantium perspiciatis ut quasi quibusdam, alias vitae? Consequatur distinctio iure quo earum laboriosam quia in hic molestias? Voluptate, nulla culpa totam cum similique molestias quisquam error architecto tempore sunt nemo iusto ipsa quasi explicabo veniam et dolore! Doloribus voluptas ullam aliquid necessitatibus possimus odio enim, itaque hic? Quo similique provident iste voluptatibus aspernatur inventore excepturi necessitatibus non laudantium officiis fugit quidem corrupti, fuga dolorum quae animi nesciunt laboriosam fugiat? Incidunt deserunt, qui dignissimos sint dolor, temporibus, tenetur mollitia voluptates ducimus recusandae harum corrupti cumque hic atque aliquam facere laborum doloremque quibusdam. In sed unde veniam totam. Similique eum recusandae minima assumenda amet quisquam quae saepe reiciendis adipisci tempora, qui optio quam perspiciatis laboriosam ipsam totam accusamus, nobis doloribus tempore. Sequi, error aspernatur laudantium eius obcaecati ea eum et in veritatis fuga, tempore quam quisquam asperiores commodi aut. Nesciunt fugit veritatis deleniti. Incidunt amet quas soluta quos excepturi dolore omnis sed dolorum veritatis, perspiciatis unde quae ducimus voluptates velit sequi earum, vero ipsum recusandae ad deserunt quibusdam? Quos neque vero, perferendis voluptate deserunt consequatur? Porro blanditiis deleniti nihil suscipit veniam voluptates, nostrum quasi quod quaerat sapiente unde nisi accusamus cupiditate architecto, culpa, quis impedit. Beatae culpa id iure iusto quo odio recusandae modi nostrum fuga aperiam quod sunt fugiat ipsam consectetur officia numquam necessitatibus quibusdam repellendus consequatur quidem harum aspernatur, ad facere similique! Excepturi, quidem! Quae facere labore nostrum quaerat natus alias, quam, dolorem, provident officia explicabo error aut numquam cumque cum sequi asperiores ad rerum. Totam ullam dicta eaque nobis illo reiciendis a amet assumenda quis corporis ex quidem cum similique dolorem, quos repellat eos quae nulla porro? Quos natus totam placeat commodi mollitia, quidem debitis voluptatum beatae eum, cumque voluptatibus. Quos voluptatibus, aspernatur labore odit repellendus incidunt, corporis dolore iusto mollitia quasi nesciunt dolores iure aut quae officia aliquid fugiat tempore rerum deleniti quisquam voluptatum voluptate quam voluptatem aliquam! Distinctio repellat suscipit assumenda inventore ea architecto neque non ipsa sapiente odit, nemo error, quaerat temporibus debitis aliquid consequatur aut repudiandae incidunt harum quas? Reiciendis vel illum harum sint eaque doloribus veritatis repudiandae facere officiis recusandae. Quae, repudiandae ducimus! At, sapiente dolorem eos dicta hic dignissimos quo libero maxime? Dolorem impedit cupiditate hic assumenda voluptatibus exercitationem fugit? Iure doloribus facere repudiandae officiis libero eveniet nesciunt sunt!
				</div>
				</>
  			)}
			footer = {() => (
				<>
				<button 
					className="btn btn-outline-dark" 
					onClick={() => setIsChecked(false)}
					data-bs-dismiss='modal' aria-label='decline'
				>
					Decline
				</button>
				{/* Both decline and accept buttons will change the state of the checkbox accordingly and close the modal */}
				<button 
					className="btn btn-dark me-md-4 px-5"
					onClick={() => setIsChecked(true)}
					data-bs-dismiss='modal' aria-label='accept'
				>
					Accept
				</button>
				</>
			)}
		/>
    </div>
  );
};

export default Signup;