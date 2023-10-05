import './login.css';

const Login = () => {
    return (
        <body>
            <form>
                <img src={logo}/>
                <input type='email'></input>
                <input type='password'></input>
                <button type='submit'>Login</button>
            </form>
        </body>
    )
}

export default Login