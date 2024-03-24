import './home.css';
import Navbar from '../Navbar/navbar';
import HowTo from './HowTo/howto';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <div>
            <div className='container-fluid header'>
                <Navbar signedIn={false}/>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='carousel col-md-6 text-center d-none d-md-block'>
                            {/* Caoursel will display various images of hotels, guest houses and resorts */}
                            <h3>Greeting Carousel</h3>
                        </div>
                        <div className='col-12 col-md-5 text-center text-md-end'>
                            <h1>
                                <div className='display-3'>let's find <br></br>your <br></br>dream hotel <br></br>resort or <br></br>guest house</div>
                            </h1>
                            <Link className='mt-5 btn btn-lg rounded-pill s-u' to='/signup'>get started <i className='bi bi-arrow-right-circle ms-2'></i></Link>
                            <p className='lead my-5 text-light'>Already have an account? <a href='/login'>Login</a></p>
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