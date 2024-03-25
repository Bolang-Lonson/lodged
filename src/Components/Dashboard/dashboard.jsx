import './dashboard.css';
import drklogo from '../../Assets/Images/other/logo-char.png';

const Dashboard = () => {
    return (
        <>
        <div className="ps-2 m-0">
            <div className="row justify-content-center align-item-center" id='dash-content'>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary col-2">
                    <div className="justify-content-center align-items-center text-center">
                        <a href="/" className="d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src={drklogo} alt="logo" className='img-fluid'/>
                        </a>
                    </div>
                    <hr/>
                    <ul className="nav nav-pills nav-flush flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">
                        <i className="bi pe-none me-2 bi-house" width="16" height="16"></i>
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-body-emphasis">
                        <i className="bi pe-none me-2 bi-speedometer" width="16" height="16"></i>
                        Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-body-emphasis">
                        <i className="bi pe-none me-2 bi-table" width="16" height="16"></i>
                        Orders
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-body-emphasis">
                        <i className="bi pe-none me-2 bi-grid" width="16" height="16"></i>
                        Products
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link link-body-emphasis">
                        <i className="bi pe-none me-2 bi-person-circle" width="16" height="16"></i>
                        Customers
                        </a>
                    </li>
                    </ul>
                    <hr></hr>
                    <div className="dropdown">
                        <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item" href="/">New project...</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Sign out</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            Wallet
                        </div>
                        <div className="col-md-8 col-12">Pending Bookings</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard