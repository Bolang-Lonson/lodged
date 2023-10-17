import './signup.css';
import countries from './countrycodes.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {

    return (
        <div>
            <div className="container-sm box">
                <h1 className="text-center mb-3">Signup</h1>
                <form action="/signup" method="post">
                    <div className="form-group my-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group my-2 telly">
                        <label htmlFor="phone">Telephone Number</label>
                        <select id="country-selector" name="country" className='form-select'>
                            <option value="">Country Code</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.dial_code}>
                                    {country.dial_code} - {country.name}({country.code})
                                </option>
                            )
                            )}
                        </select>        
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your telephone number"/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup