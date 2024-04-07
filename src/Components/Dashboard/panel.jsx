import './panel.css';
import drklogo from '../../Assets/Images/other/logo-char.png';
import userpic from '../../Assets/Images/BolangPic.jpg';
import Dashboard from './Panes/dashboard';
import History from './Panes/history';
import Discover from './Panes/discover';
import React, {useState} from 'react';


const Panel = () => {

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
                    {/* <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">
                        <i className="bi pe-none me-2 bi-house" width="16" height="16"></i>
                        Home
                        </a>
                    </li> */}
                        <li className='nav-item'>
                            <a href="/" 
                                className="nav-link active" id='nav-dash-tab'
                                data-bs-toggle='tab' role='tab'
                                data-bs-target='#nav-dash' aria-controls='nav-dash'
                                aria-selected='true'
                            >
                                <i className="bi pe-none me-2 bi-speedometer" width="16" height="16"></i>
                            Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/" 
                                className="nav-link" id='nav-hist-tab'
                                data-bs-toggle='tab' role='tab'
                                data-bs-target='#nav-hist' aria-controls='nav-hist'
                                aria-selected='false'
                            >
                                <i className="bi pe-none me-2 bi-clock-history" width="16" height="16"></i>
                            History
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link" id="nav-disc-tab"
                                data-bs-toggle='tab' role='tab'
                                data-bs-target='#nav-discover' aria-controls='nav-discover'
                                aria-selected='false'
                            >
                                <i className="bi pe-none me-2 bi-search" width="16" height="16"></i>
                            Discover
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link link-body-emphasis">
                                <i className="bi pe-none me-2 bi-bookmark-heart" width="16" height="16"></i>
                            Favourites
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
                    <div className="tab-content container" id="t">
                        <Dashboard/>
                        <History/>
                        <Discover/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel