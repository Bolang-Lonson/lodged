import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    function signIn() {

    }
    
    return (
        <div className='container-fluid'>
            <div className='form_box'>
                <form>
                    <div className='login-logo'></div>
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
                        <input type="checkbox" className="form-check-input" id="rem-check"/>
                        <label className="form-check-label" for="rem-check">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-outline-success px-5">Login</button>
                    <div className='form-text pt-1'>Don't have an account? <a href='/signup'>Signup</a></div>
                </form>
            </div>
            <div><p className="mt-5 mb-3 text-body-secondary">&copy; Lodged.com 2024</p></div>
        </div>
    )
}

export default Login