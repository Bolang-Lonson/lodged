import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import Logo from '../../Assets/Images/biglogo-png.png';

const Navbar = ({transparent = true, signedIn}) => {
    // Deciding whether the navbar will be transparent depending on the view on which it is found
    const cn = transparent ? '': ' no-trans';
    return(
      <div className={'head container-xl'+cn}>
        <img className='logo' src={Logo} alt="logo"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <nav>
          <ul className="nav_links">
            <li><NavLink exact='true' className='a' activeclassname='active' aria-current='page' to='/'>HOME</NavLink></li>
            <li><NavLink exact='true' className='a' activeclassname='active' to='/about'>ABOUT</NavLink></li>
            <li><NavLink exact='true' className='a' activeclassname='active' to='/categories'>CATEGORIES</NavLink></li>
          </ul>
        </nav>
        {/* Get Started will only be displayed when not logged in */}
        {!signedIn && <Link className="nav_btn" to='/signup'><button>Get Started</button></Link>}
      </div>
    )
}

export default Navbar;