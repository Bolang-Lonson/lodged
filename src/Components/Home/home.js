import './home.css';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <header className='header'>
            <Navbar/>
            <div className='info'>
                <h1>let's find <br></br>your <br></br>dream hotel room or <br></br>guest house</h1>
                <Link className='s-u'><button>get started &rarr;</button></Link>
            </div>
        </header>
        <div id='howto'>

        </div>
        <div id='footer'></div>
        </>
    )
}

export default Home;