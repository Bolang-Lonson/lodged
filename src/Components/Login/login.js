import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import drklogo from '../../Assets/Images/other/logo-char.png'

const Login = () => {
    function signIn() {

    }
    
    return (
        <div>
            <div className='logo-box pt-4'><img src={drklogo} alt='...'/></div>
            <div className='form_box'>
                <h1 className="text-center form-group mb-3">Login</h1>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Enter a valid email address.</div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rem-check"/>
                        <label className="form-check-label" htmlFor="rem-check">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-outline-success px-5">Login</button>
                    <div className='form-text pt-1'>Don't have an account? <a href='/signup'>Signup</a></div>
                </form>
            </div>
            <div><p className="mt-5 form-group mb-3 text-body-secondary">&copy; Lodged.com 2024</p></div>
        </div>
    )
}

export default Login