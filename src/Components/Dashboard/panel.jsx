import './panel.css';
import drklogo from '../../Assets/Images/other/logo-char.png';
import userpic from '../../Assets/Images/BolangPic.jpg';
import Dashboard from './Panes/dashboard';
import History from './Panes/history';
import Discover from './Panes/discover';
import React, {useState} from 'react';
import {Tab, Container, Row, Col, Dropdown, ButtonGroup, Button, Nav} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';

const Panel = () => {

    const InfoBar = () => {
        return (
            <Container className="justify-content-between d-flex align-items-center bg-dark mx-0 mb-4 p-3 px-lg-5 border-bottom">
                <h2 className='text-white-50 mb-0'>Dashboard</h2>
                <div className="btn-toolbar justify-content-between align-items-center">
                    <div className="d-flex input-group">
                        <input type="text" 
                                className="d-none d-md-inline-block form-control rounded-start-pill border-end-0"
                                aria-describedby='search'
                                placeholder='Type to search'
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button type='button' className={`input-group-text ${mobileDisplay? 'rounded-pill':'rounded-end-pill border-start-0'} bg-white`}><i className="bi bi-search"></i></button>
                    </div>
                    <Dropdown className="ms-4 ms-md-2 ms-lg-5" id='profile-dropdown'>
                        <Dropdown.Toggle className="d-flex h-100 align-items-center bg-light text-black border-0 p-0 dropdown-toggle">
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong className=' d-none d-md-inline'>User</strong>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="text-small shadow">
                            <Dropdown.Item href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</Dropdown.Item>
                            <Dropdown.Item href="/settings"><i className="bi bi-gear me-3"></i>Settings</Dropdown.Item>
                            <Dropdown.Item href="/profile"><i className="bi bi-person me-3"></i>Profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        )
    }
    const [searchValue, setSearchValue] = useState();
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});
    
    return (
        <Tab.Container defaultActiveKey="dashboard" className='m-0'>
            <Row className="bg-light m-0 pe-0" id='dash-page'>
                <Col sm={2} className=" d-none d-sm-flex flex-column flex-shrink-0 py-3 bg-white" id='dash-sidebar'>
                    <div className="justify-content-center align-items-center text-center">
                        <a href="/" className="d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src={drklogo} alt="logo" className='ms-2 img-fluid'/>
                        </a>
                    </div>
                    <hr/>
                    <Nav variant='pills' defaultActiveKey="dashboard" className="flex-column mb-auto">
                    {/* <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">
                        <i className="bi pe-none me-2 bi-house" width="16" height="16"></i>
                        Home
                        </a>
                    </li> */}
                        <Nav.Item>
                            <Nav.Link eventKey="dashboard">
                                <i className="bi pe-none me-2 bi-speedometer" width="16" height="16"></i>
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="history">
                                <i className="bi pe-none me-2 bi-clock-history" width="16" height="16"></i>
                                History
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="discover">
                                <i className="bi pe-none me-2 bi-search" width="16" height="16"></i>
                                Discover
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="favourites">
                                <i className="bi pe-none me-2 bi-bookmark-heart" width="16" height="16"></i>
                                Favourites
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr></hr>
                    <Dropdown as={ButtonGroup}>
                        <Button className="align-items-center ps-0" variant='none'>
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>User</strong>
                        </Button>
                        <Dropdown.Toggle split variant='none'/>
                        <Dropdown.Menu className="text-small shadow">
                            <Dropdown.Item href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</Dropdown.Item>
                            <Dropdown.Item href="/"><i className="bi bi-gear me-3"></i>Settings</Dropdown.Item>
                            <Dropdown.Item href="/profile"><i className="bi bi-person me-3"></i>Profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={10}  className="bg-light px-0" id='dash-content'>
                    <Tab.Content className=' m-0'>
                        <Tab.Pane eventKey='dashboard' className=' m-0 pe-0'>
                            <InfoBar/>
                            <Col xs={11} className='mx-auto'>
                                <Dashboard/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='history'>
                            <InfoBar/>
                            <Col xs={11} className='mx-auto'>
                                <History/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='discover'>
                            <InfoBar/>
                            <Col xs={11} className='mx-auto'>
                                <Discover/>
                            </Col>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Panel