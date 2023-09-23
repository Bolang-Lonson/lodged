import { Link } from "react-router-dom";
import Logo from '../../Assets/Images/biglogo-png.png';
import './navbar.css';

const Navbar = () => {

  return(
    <div className="head">
      <img className='logo' src={Logo} alt="logo"/>
      <nav>
        <ul className="nav_links">
          <li><Link className='a' aria-current='page' to='/'>HOME</Link></li>
          <li><Link className='a' to='/about'>ABOUT</Link></li>
          <li><Link className='a' to='/categories'>CATEGORIES</Link></li>
        </ul>
      </nav>
      <Link className="nav_btn" to='/signup'><button>Get Started</button></Link>
    </div>
  )
}

export default Navbar;