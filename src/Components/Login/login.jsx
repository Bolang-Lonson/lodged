import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import drklogo from '../../Assets/Images/other/logo-char.png';
import Modal from '../Signup/modal';
import { Alert } from 'react-bootstrap';


const Login = () => {
	const navigate = useNavigate();
	const [passVisible, setPassVisible] = useState(false);
	const toggleVisible = () => {
		setPassVisible(!passVisible);
	}
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		recoveryEmail: '',
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
				// alert(e)
			}); // for personal debugging and maybe for fun
			return;
		}

		// Perform sign-in logic here
		setIsLogging(true);
	};

	const [isLogging, setIsLogging] = useState(false);


	useEffect(() => {
		function simulateLogin() {
			return new Promise((resolve) => setTimeout(resolve, 2000));
		}
		async function signIn() {
			// Add your sign-in code here
			// practicing promises and asynchronous programming
			if (isLogging) {
				await simulateLogin().then(() => setIsLogging(false));
				navigate('/panel/');
			}
		}

		signIn();
	},[isLogging, navigate]);

	const errorCheck = () => {
				
		let error = ''; 

		if (!formData.recoveryEmail){
			error = 'Email address is required.';
		} else if (!/\S+@\S+\.\S+/.test(formData.recoveryEmail)){
			error = 'Please enter a valid email address.';
		}

		setErrors({...errors, recoveryEmail: error});
	}

	const sendRecovEmail = () => {
		// resetting the form data to empty string
		setFormData({...formData, recoveryEmail: ''})
	}

	const [inFocus, setInFocus] = useState({
		email: false,
		password: false
	});

	return (
		<div className="p-0 m-0" id="background-art">
			<div className="row justify-content-end align-items-center p-0 m-0" id="form-section">
				{/* Form box placed on one side of the page */}
				<div className="col-md-6 col-lg-6 bg-light h-100 position-relative shadow px-0 m-0" id="form-box">
					<a href='/' className=' position-absolute top-0 start-0 m-2 text-black fw-semibold btn btn-light'><span className="bi bi-arrow-left-short lead mb-0"> Home</span></a>
					<div className="container pt-5">
						<div className="text-center my-3">
							<img src={drklogo} alt="logo" className="img-fluid"/>
						</div>
						{/* Form itself */}
						<div className="row my-4 my-md-5 justify-content-center">
							<div className="col-md-6 col-10">
								{errors.email && <Alert variant='danger' onClose={() => setErrors({...errors, email: ''})} dismissible>{errors.email}</Alert>}
								{errors.password && <Alert variant='danger' onClose={() => setErrors({...errors, password: ''})} dismissible>{errors.password}</Alert>}
								<form onSubmit={handleSubmit}>
									<div className='form-group mb-4'>
										<label 
											htmlFor="email" 
											className="form-label border-start border-charcoal border-3 ps-2 mb-3"
										>Email Address</label>
										<input 
											type="email" 
											className={`form-control ${errors.email ? 'is-invalid' : ''} rounded-pill border-2 focus-ring ${inFocus.email? 'focus-ring-light border-success':''}`}
											aria-describedby='emailHelp' value={formData.email}
											onChange={(e) => setFormData({...formData, email: e.target.value})}
											id="email" placeholder="e.g john@example.com"
											onFocus={() => setInFocus({...inFocus, email: true})} onBlur={() => setInFocus({...inFocus, email: false})}
										/>
									</div>
									<div className='form-group mb-4'>
										<label htmlFor="pass" className="form-label border-start border-charcoal border-3 ps-2 mb-3">Password</label>
										<div className={`input-group ${errors.password? 'is-invalid': ''} border border-2 rounded-pill ${inFocus.password? 'border-success': ''}`}>
											<input 
												type={passVisible? 'text': "password"} value={formData.password}
												className={`form-control rounded-start-pill border-0 focus-ring focus-ring-light`} 
												id="pass" placeholder='********'
												onChange={(e) => setFormData({ ...formData, password: e.target.value })}
												onFocus={() => setInFocus({...inFocus, password: true})} onBlur={() => setInFocus({...inFocus, password: false})}
											/>
											<span className="input-group-text rounded-end-pill bg-white border-0" onClick={toggleVisible}>
												<i className={"bi text-muted" + (passVisible? ' bi-eye-fill':' bi-eye-slash-fill')}></i>
												{	/* switching icon based on the password visibility */}
											</span>
										</div>
									</div>	
									<div className="form-check mb-3">
										<label htmlFor="rem-check" className="form-check-label">Remember me</label>
										<input type="checkbox" className="form-check-input focus-ring focus-ring-light" id="rem-check"/>
									</div>
									<button className="btn btn-charcoal w-100 mb-4 rounded-pill" type="submit">{isLogging? 'Signing in...':'Login'}</button>
									<a href="#pass-recovery" role='button' 
										aria-controls='pass-recovery'
										data-bs-toggle='modal'
									>
										Forgot your password?
									</a>
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
			<Modal 
				id='pass-recovery'
				title = 'Password Recovery'
				body = {() => {
					return(
					<>
					<p className='mx-2'>If you have an account and forgot your password enter your email address below and we'll send you a link to renew your password</p>
					<form action="" className='col-9 justify-content-center align-items-center mx-auto'>
						<label for="modal-email" className="form-label text-muted">Your email address:</label>
						<input
							type="email" className={`form-control mt-2 mb-4 ${errors.recoveryEmail? 'is-invalid': ''}`}
							aria-describedby='recovery email' value={formData.recoveryEmail}
							id="recovery-email" placeholder="e.g. mark@mail.com"
							onChange={(e) => setFormData({...formData, recoveryEmail: e.target.value})}
							onBlur={errorCheck}
						/>
						{errors.recoveryEmail && <div className="invalid-feedback">{errors.recoveryEmail}</div>}
						<button
							className="btn btn-dark my-3 d-block mx-auto "
							disabled={errors.recoveryEmail}
							type='submit' data-bs-dismiss='modal'
							onSubmit={sendRecovEmail}
						>
							Recover Password
						</button>
					</form>
					</>
					)
				}}
			/>
		</div>
	);
};

export default Login;