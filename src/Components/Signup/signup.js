import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    fetch('./countrycodes.json')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.dial_code;
        option.textContent = `${country.name} (${country.code})`;
        countrySelector.appendChild(option);
    })
    });

    return (
        <div>
            <div className="container-sm">
                <h1 className="text-center">Signup</h1>
                <form action="/signup" method="post">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label for="phone">Telephone Number</label>
                    <select id="country-selector" name="country">
                    <option value="">Please select a country</option>
                    </select>        
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your telephone number"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup