import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './login.css';
import drklogo from '../../Assets/Images/other/logo-char.png';

const Login = () => {
	const [passVisible, setPassVisible] = useState(false);
	const toggleVisible = () => {
		setPassVisible(!passVisible);
	}
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
		setErrors({...errors});
		Object.values(errors).forEach(e => {
			console.error(e)
			alert(e)
		}); // for personal debugging and maybe for fun
		return;
		}

		// Perform sign-in logic here
		signIn();
	};

	function signIn() {
		// Add your sign-in code here
	}

	return (
		<div className="p-0 m-0" id="login-background-art">
			<div className="row justify-content-end align-items-center p-0 m-0" id="form-section">
				<div className="col-md-6 col-lg-4 bg-light h-100 position-relative  shadow px-0 m-0" id="form-box">
					<a href='/' className=' position-absolute top-0 start-0 m-4 text-black fw-semibold btn btn-light'><span className="bi bi-arrow-left-short lead mb-0"> Home</span></a>
					<div className="container pt-5">
						<div className="text-center my-3">
							<img src={drklogo} alt="logo" className="img-fluid"/>
						</div>
						<div className="row my-4 my-md-5 justify-content-center">
							<div className="col-md-9 col-10">
								<form onSubmit={handleSubmit}>
									<div className='form-group mb-4'>
										<label 
											htmlFor="email" 
											className="form-label border-start border-black border-3 ps-2 mb-3"
										>Email Address</label>
										<input 
											type="email" className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-pill`}
											aria-describedby='emailHelp' value={formData.email}
											onChange={
												(e) => setFormData({...formData, email: e.target.value})
											}
											id="email" placeholder="e.g john@example.com"

										/>
										{errors.email && <div className="invalid-feedback">{errors.email}</div>}
									</div>
									<div className='form-group mb-4'>
										<label htmlFor="pass" className="form-label border-start border-black border-3 ps-2 mb-3">Password</label>
										<div className={`input-group ${errors.password? 'is-invalid': ''}`}>
											<input type={passVisible? 'text': "password"} className={`form-control rounded-start-pill`} 
											id="pass" placeholder='********'
											value={formData.password}
											onChange={
												(e) => setFormData({ ...formData, password: e.target.value })
											}
											/>
											<span className="input-group-text rounded-end-pill" onClick={toggleVisible}>
												<i className={"bi text-muted" + (passVisible? ' bi-eye-fill':' bi-eye-slash-fill')}></i>
												{	/* switching icon based on the password visibility */}
											</span>
										</div>
										{errors.password && <div className='invalid-feedback'>{errors.password}</div>}
									</div>	
									<div className="form-check mb-3">
										<label htmlFor="rem-check" className="form-check-label">Remember me</label>
										<input type="checkbox" className="form-check-input" id="rem-check"/>
									</div>
									<button className="btn btn-dark w-100 mb-4 rounded-pill" type="submit">Login</button>
									<a href="/pass-recovery">Forgot your password?</a>
									<div className="mt-3">Don't have an account? <a href="/signup">Signup</a></div>
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

export default Login;