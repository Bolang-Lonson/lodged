import './dashboard.css';
import drklogo from '../../Assets/Images/other/logo-char.png';
import landpic from '../../Assets/Images/landpic-min.jpg';
import userpic from '../../Assets/Images/BolangPic.jpg';
import React, {useState} from 'react';

// const Modal = () => {
//     return (
//         <></>
//     )
// }

const Dashboard = () => {

    const [searchValue, setSearchValue] = useState();

    return (
        <div className="ps-3 m-0">
            <div className="row justify-content-center align-item-center" id='dash-page'>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-white col-2" id='dash-sidebar'>
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
                        <a href="/profile" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>User</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item" href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</a></li>
                            <li><a className="dropdown-item" href="/"><i className="bi bi-gear me-3"></i>Settings</a></li>
                            <li><a className="dropdown-item" href="/profile"><i className="bi bi-person me-3"></i>Profile</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-10 bg-light p-3 px-5" id='dash-content'>
                    <div className="justify-content-between d-flex align-items-center mb-4">
                        <h2 className=' float-start text-muted'>Dashboard</h2>
                        <div className="btn-toolbar">
                            <div className="navbar-search d-flex input-group">
                                <input type="text" 
                                        className="form-control rounded-start-pill border-end-0"
                                        aria-describedby='search'
                                        placeholder='Type to search'
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <button type='button' className='input-group-text rounded-end-pill bg-white border-start-0'><i className="bi bi-search"></i></button>
                            </div>
                            <div className="dropdown mx-5">
                                <a href="/profile" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                                    <strong>User</strong>
                                </a>
                                <ul className="dropdown-menu text-small shadow">
                                    <li><a className="dropdown-item" href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</a></li>
                                    <li><a className="dropdown-item" href="/"><i className="bi bi-gear me-3"></i>Settings</a></li>
                                    <li><a className="dropdown-item" href="/profile"><i className="bi bi-person me-3"></i>Profile</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4 col-12">
                            <div className="card rounded-4 bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-5">
                                    <h5 className="card-title fs-4">Wallet <i className="ms-1 bi bi-wallet2"></i></h5>
                                    <div className="my-3"><span className="display-3 text-success fw-bold">$00.00</span></div>
                                    <a href="/deposit" className="mt-3 btn btn-primary rounded-3 align-items-center">Deposit <i className="bi bi-plus-circle"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="card rounded-4 bg-white border-0 shadow-sm">
                                <div className="card-body text-center p-5">
                                    <h5 className="card-title fs-4">Upcoming Bookings <i className="ms-1 bi bi-journals"></i></h5>
                                    <hr/>
                                    <div className="my-3">
                                        <div className="table-responsive small">
                                            <table className="table table-striped table-sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Establishment</th>
                                                        <th>from</th>
                                                        <th>to</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Hilton Hotel</td>
                                                        <td>05/04/2024</td>
                                                        <td>05/05/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mont-Febe</td>
                                                        <td>06/05/2024</td>
                                                        <td>06/06/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>La Falaise Hotel</td>
                                                        <td>07/06/2024</td>
                                                        <td>07/07/2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Heaven Hotel</td>
                                                        <td>08/07/2024</td>
                                                        <td>08/08/2024</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <hr />
                                    <a href="/bookingSearch" className="btn btn-light w-100 text-center lead">Create New Booking</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="card border-0 rounded-4 shadow-sm">
                                <div className="card-header text-capitalize bg-white rounded-4 rounded-bottom-0 p-3">
                                    <h4>Nearby Lodging <i className="ms-2 bi bi-geo"></i></h4>
                                </div>
                                <div className="card-body">
                                    <div className="list-group">
                                        <div className="list-group-item border-0 border-bottom">
                                            <h5 className="mb-1"><i className="bi bi-buildings-fill me-3"></i>
                                                Hilton Hotel
                                                <span className='float-end text-warning pe-4'>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                            </h5>
                                            <div className='row py-3'>
                                                <div className='col-8'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam debitis rerum aliquam soluta expedita itaque! Nihil corrupti veniam quod quasi rem suscipit officia maxime harum tempore, ducimus corporis a quos?
                                                    <h6 className='mt-5'>Ammenities</h6>
                                                    <ol>
                                                        <li className='m-auto'>Gym</li>
                                                        <li className='m-auto'>Spa</li>
                                                        <li className='m-auto'>Reastaurant, Bar</li>
                                                        <li className='m-auto'>Pool</li>
                                                        <li className='m-auto'>Wi-Fi</li>
                                                    </ol>
                                                </div>
                                                <div className='col-4'><img src={landpic} alt="hilton" className='img-fluid rounded-3'/></div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-0 border-bottom">
                                            <h5 className="mb-1"><i className="bi bi-buildings-fill me-3"></i>
                                                La Falaise Hotel
                                                <span className='float-end text-warning pe-4'>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                </span>
                                            </h5>
                                            <div className='row py-3'>
                                                <div className='col-8'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam debitis rerum aliquam soluta expedita itaque! Nihil corrupti veniam quod quasi rem suscipit officia maxime harum tempore, ducimus corporis a quos?
                                                    <h6 className='mt-5'>Ammenities</h6>
                                                    <ol>
                                                        <li className='m-auto'>Gym</li>
                                                        <li className='m-auto'>Spa</li>
                                                        <li className='m-auto'>Reastaurant, Bar</li>
                                                        <li className='m-auto'>Pool</li>
                                                        <li className='m-auto'>Wi-Fi</li>
                                                    </ol>
                                                </div>
                                                <div className='col-4'><img src={landpic} alt="hilton" className='img-fluid rounded-3'/></div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-0 border-bottom">
                                            <h5 className="mb-1"><i className="bi bi-buildings-fill me-3"></i>
                                                Heaven Hotel
                                                <span className='float-end text-warning pe-4'>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star"></i>
                                                </span>
                                            </h5>
                                            <div className='row py-3'>
                                                <div className='col-8'>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam debitis rerum aliquam soluta expedita itaque! Nihil corrupti veniam quod quasi rem suscipit officia maxime harum tempore, ducimus corporis a quos?
                                                    <h6 className='mt-5'>Ammenities</h6>
                                                    <ol>
                                                        <li className='m-auto'>Gym</li>
                                                        <li className='m-auto'>Spa</li>
                                                        <li className='m-auto'>Reastaurant, Bar</li>
                                                        <li className='m-auto'>Pool</li>
                                                        <li className='m-auto'>Wi-Fi</li>
                                                    </ol>
                                                </div>
                                                <div className='col-4'><img src={landpic} alt="hilton" className='img-fluid rounded-3'/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="align-items-center p-3 pe-5"><a href="/lodgings" className="lead float-end">See more &gt;&gt;</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard