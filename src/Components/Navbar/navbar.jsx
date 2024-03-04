import { NavLink } from "react-router-dom";
import './navbar.css';
import Logo from '../../Assets/Images/biglogo-png.png';

// const Navitem = ({transparent = true, signedIn}) => {
//     // Deciding whether the navbar will be transparent depending on the view on which it is found
//     const cn = transparent ? '': ' no-trans';
//     return(
//       <div className={'head container-xl'+cn}>
//         <img className='logo' src={Logo} alt="logo"/>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <nav>
//           <ul className="nav_links">
//             <li><NavLink exact='true' className='a' activeclassname='active' aria-current='page' to='/'>HOME</NavLink></li>
//             <li><NavLink exact='true' className='a' activeclassname='active' to='/about'>ABOUT</NavLink></li>
//             <li><NavLink exact='true' className='a' activeclassname='active' to='/categories'>CATEGORIES</NavLink></li>
//           </ul>
//         </nav>
//         {/* Get Started will only be displayed when not logged in */}
//         {!signedIn && <Link className="nav_btn" to='/signup'><button>Get Started</button></Link>}
//       </div>
//     )
// }

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
				<div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
					<ul className="navbar-nav">
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link ' : 'nav-link')} to='/'>HOME</NavLink>
						</li>
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link ' : 'nav-link')} to='/about'>ABOUT</NavLink>
						</li>
						<li className="nav-item mx-3">
							<NavLink exact='true' className={({ isActive }) => (isActive ? 'current nav-link ' : 'nav-link')} to='/categories'>CATEGORIES</NavLink>
						</li>
						<li className="nav-item mx-3 d-md-none">
							<a className="nav-link" href="#pricing">SIGNUP</a>
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