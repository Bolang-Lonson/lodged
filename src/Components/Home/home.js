import './home.css';
import Navbar from '../Navbar/navbar';
import HowTo from './HowTo/howto';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <body>
        <header className='header'>
            <Navbar className='navbar'/>
            <div className='info'>
                <h1>let's find <br></br>your <br></br>dream hotel room or <br></br>guest house</h1>
                <Link className='s-u' to='/signup'><button>get started &rarr;</button></Link>
                <p>Already have an account? <a href='/login'>Login</a></p>
            </div>
        </header>
        <HowTo/>
        <Footer/>
        </body>
    )
}

export default Home;