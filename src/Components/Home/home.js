import './home.css';
import Navbar from '../Navbar/navbar';
import HowTo from './HowTo/howto';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <Navbar className='navbar' signedIn={false}/>
                <div className='container'>
                    <div className='row'>
                        <div className='carousel col-12 col-lg-6'>
                            {/* Caoursel will display various images of hotels, guest houses and resorts */}
                            <h3>Greeting Carousel</h3>
                        </div>
                        <div className='info col-12 col-lg-4'>
                            <h1>let's find <br></br>your <br></br>dream hotel <br></br>room or <br></br>guest house</h1>
                            <Link className='s-u' to='/signup'><button>get started &rarr;</button></Link>
                            <p>Already have an account? <a href='/login'>Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* HowTo is separated into its own component because it will become more complicated in the future */}
            <HowTo/>
            <Footer/>
        </div>
    )
}

export default Home;