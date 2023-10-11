import './login.css';
import logo from '../../Assets/Images/logo-char.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    function signIn() {

    }
    
    return (
        <div className='container'>
            <div className='form_box'>
                <form>
                    <div>
                        <img src={ logo } alt='...' className='mx-5'/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Enter a valid email address.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-outline-success px-5">Login</button>
                    <div className='form-text pt-1'>Don't have an account? <a href='/signup'>Signup</a></div>
                </form>
            </div>
        </div>
    )
}

export default Login