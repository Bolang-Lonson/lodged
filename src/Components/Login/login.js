import './login.css';
import logo from '../../Assets/Images/logo2-png.png';

const Login = () => {
    function signIn() {

    }
    
    return (
        <body>
            <form>
                <img src={logo}/>
                <input type='email'></input>
                <input type='password'></input>
                <button type='submit' onSubmit={signIn}>Login</button>
            </form>
        </body>
    )
}

export default Login