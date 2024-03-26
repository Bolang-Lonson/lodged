import { NavLink } from "react-router-dom";
import './navbar.css';
import Logo from '../../Assets/Images/biglogo-png.png';

const Navbar = ({transparent = true, signedIn}) => {
	// Deciding whether the navbar will be transparent depending on the view on which it is found
	const opaque = transparent? '': ' no-trans'
	return(
	  	<nav className={"navbar navbar-expand-md navbar-light" + opaque}>
		  	<div className="container">
			  	<a href="/" className="navbar-brand">
				  	<img src={Logo} alt="logo"/>
			  	</a>
			  	{/* a toggle button for mobile nav */}
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span><i className="bi bi-list"></i></span>
				</button>
				{/* navbar links */}
				<div className="collapse navbar-collapse justify-content-end align-items-center" id="main-nav">
					<ul className="navbar-nav">
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link hover-slide' : 'nav-link hover-slide')} to='/'>HOME</NavLink>
						</li>
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link hover-slide' : 'nav-link hover-slide')} to='/about'>ABOUT</NavLink>
						</li>
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link hover-slide' : 'nav-link hover-slide')} to='/contact'>CONTACT</NavLink>
						</li>
						<li className="nav-item mx-3 d-md-none">
							<a className="nav-link hover-slide" href="/signup">SIGNUP</a>
						</li>
						{ !signedIn &&
						<li className="nav-item ms-5 d-none d-md-inline">
							<a className="btn btn-lg rounded-pill custom-btn" href="/signup">Get Started</a>
						</li>}
				  	</ul>
			  	</div>
		  	</div>
	  	</nav>
	)
}
export default Navbar;