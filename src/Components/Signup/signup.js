import './signup.css';
import countries from './countrycodes.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import drklogo from '../../Assets/Images/other/logo-char.png'
import { useState } from 'react';

const Signup = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div>
            <div className='logo-box pt-4'><img src={drklogo} alt='...'/></div>
            <div className="container-sm box">
                <h1 className="text-center mb-3">Signup</h1>
                <form action="/signup" method="post">
                    <div className="form-floating my-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-floating my-2">
                        <label htmlFor="emailDisabled">Email</label>
                        <input type="email" className="form-control" id="emailDisabled" name="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-floating my-2 telly">
                        <select id="country-selector" name="country" className='form-select'>
                            <option value="">Country Code</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.dial_code}>
                                    {country.dial_code} - {country.name}({country.code})
                                </option>
                            )
                            )}
                        </select>
                        <div className='form-floating number'>
                            <label htmlFor="phone">Telephone Number</label>
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your telephone number"/>
                        </div>
                    </div>
                    <div className="form-floating my-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className="form-floating my-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"/>
                    </div>
                    <div className="form-check my-3">
                        <input type="checkbox" className="form-check-input" id="rem-check" checked={isChecked} onChange={handleCheck}/>
                        <label className="form-check-label" htmlFor="rem-check">I have read and agree to the <a href='/termsandcoditions'>terms and conditions</a></label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" disabled={!isChecked}>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup