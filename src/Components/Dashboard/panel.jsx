import './panel.css';
import logo from '../../Assets/Images/biglogo-png.png';
import userpic from '../../Assets/Images/BolangPic.jpg';
import Dashboard from './Panes/dashboard';
import History from './Panes/history';
import Explore from './Panes/explore';
import React, {useState} from 'react';
import {Tab, Container, Row, Col, Dropdown, ButtonGroup, Button, Nav} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';

const Panel = () => {

    const [searchValue, setSearchValue] = useState();
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});
    
    const InfoBar = ({title}) => {
        return (
            <Container fluid className="justify-content-between d-flex align-items-center bg-white shadow-sm mx-0 mb-4 p-3 px-lg-5">
                <h2 className='text-charcoal mb-0 ms-lg-2 text-capitalize'>{title}</h2>
                <div className="btn-toolbar justify-content-between align-items-center">
                    <div className="d-flex input-group">
                        <input type="text" 
                                className="d-none d-md-inline-block form-control rounded-start-pill border-end-0"
                                aria-describedby='search'
                                placeholder='Type to search'
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button type='button' className={`input-group-text ${mobileDisplay? 'rounded-pill':'rounded-end-pill border-start-0 bg-white'}`}><i className="bi bi-search"></i></button>
                    </div>
                    <Dropdown drop='down-centered' className="ms-4 ms-md-2 ms-lg-5">
                        <Dropdown.Toggle className="bg-transparent border-0 text-black d-flex h-100 align-items-center p-0 dropdown-toggle">
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong className=' d-none d-md-inline'>User</strong>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="text-small">
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
    
    return (
        <Tab.Container defaultActiveKey="explore" className='m-0'>
            <Row className="bg-light m-0 pe-0" id='dash-page'>
                <Col sm={2} className="px-4 d-none d-sm-flex flex-column flex-shrink-0 py-3 bg-charcoal" id='dash-sidebar'>
                    <div className="justify-content-center align-items-center text-center">
                        <a href="/" className="d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src={logo} alt="logo" className='ms-2 img-fluid'/>
                        </a>
                    </div>
                    <hr/>
                    <Nav variant='underline' defaultActiveKey="explore" className="flex-column mb-auto">
                    {/* <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">
                        <i className="bi pe-none me-2 bi-house" width="16" height="16"></i>
                        Home
                        </a>
                    </li> */}
                        <Nav.Item>
                            <Nav.Link eventKey="explore" className='ps-3 text-glitter'>
                                <i className="bi pe-none me-2 bi-search" width="16" height="16"></i>
                                Explore
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="dashboard" className='text-glitter ps-3'>
                                <i className="bi pe-none me-2 bi-speedometer" width="16" height="16"></i>
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="history" className='text-glitter ps-3'>
                                <i className="bi pe-none me-2 bi-clock-history" width="16" height="16"></i>
                                History
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="favourites" className='ps-3 btn-toggle collapsed text-glitter'>
                                <i className="bi pe-none me-2 bi-bookmark-heart" width="16" height="16"></i>
                                Favourites
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <hr></hr>
                    <Dropdown as={ButtonGroup} drop='up-centered'>
                        <Button className="align-items-center ps-0 text-white" variant='none'>
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>User</strong>
                        </Button>
                        <Dropdown.Toggle split variant='none' className='text-white'/>
                        <Dropdown.Menu className="text-small shadow">
                            <Dropdown.Item href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</Dropdown.Item>
                            <Dropdown.Item href="/"><i className="bi bi-gear me-3"></i>Settings</Dropdown.Item>
                            <Dropdown.Item href="/profile"><i className="bi bi-person me-3"></i>Profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={10}  className="bg-light px-0 overflow-y-scroll" id='dash-content'>
                    <Tab.Content className='m-0'>
                        <Tab.Pane eventKey='dashboard' className='m-0 p-0'>
                            <InfoBar title='dashboard'/>
                            <Col xs={11} className='mx-auto'>
                                <Dashboard/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='history'>
                            <InfoBar title='history'/>
                            <Col xs={11} className='mx-auto'>
                                <History/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='explore'>
                            <InfoBar title='explore'/>
                            <Col xs={11} className='mx-auto'>
                                <Explore/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='favourites'>
                            <InfoBar title='favourites'/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Panel