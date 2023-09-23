import './home.css';
import pic from '../../Assets/Images/landpic.jpg';
import Navbar from '../Navbar/navbar';

const Home = () => {
    return (
        <>
        <div className='header '>
            <Navbar/>
            <img src={pic} alt='#' className='bg-img'/>
        </div>
        </>
    )
}

export default Home;