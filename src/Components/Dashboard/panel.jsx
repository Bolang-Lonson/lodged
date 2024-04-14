import logo from '../../Assets/Images/biglogo-png.png';
import './panel.css';
import userpic from '../../Assets/Images/BolangPic.jpg';
import Dashboard from './Panes/dashboard';
import History from './Panes/history';
import Explore from './Panes/explore';
import React, {useState} from 'react';
import {Tab, Container, Row, Col, Dropdown, ButtonGroup, Button, Nav, Collapse, Badge} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';

const Panel = () => {

    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});
    const [open, setOpen] = useState(false);
    const [tabActive, setTabActive] = useState('explore');

    function handleSelect(eventKey) {
        setTabActive(eventKey);
        // debugging using console.log
        console.log('Active tab', eventKey);
    }

    let notifications = 1;
    // Number of notifications to display as badge
    
    const InfoBar = ({title, shadow=true}) => {

        const [searchValue, setSearchValue] = useState('');
        const [inFocus, setInFocus] = useState(false);
        function updateSearchVal (e) {
            setSearchValue(e.target.value)
        }

        return (
            <Container fluid className={`justify-content-between d-flex align-items-center ${shadow? 'shadow-sm':''} mx-0 mb-4 p-3 px-lg-5`}>
                <h2 className='text-charcoal mb-0 ms-lg-2 text-capitalize'>{title}</h2>
                <div className="btn-toolbar justify-content-between align-items-center">
                    <div className="d-flex input-group">
                        <input 
                            type="search" onFocus={() => setInFocus(true)} onBlur={() => setInFocus(false)}
                            className={`form-control focus-ring focus-ring-light d-none d-md-inline-block bg-white ${inFocus? 'border-success-subtle':'bg-opacity-25'} rounded-start-pill border-end-0 ps-4 pe-0`}
                            aria-describedby='search' placeholder='Type to search'
                            value={searchValue} onChange={updateSearchVal}
                        />
                        <button type='button' className={`input-group-text text-charcoal bg-white ${inFocus? 'border-success-subtle':'bg-opacity-25'} ${mobileDisplay? 'rounded-pill':'rounded-end-pill border-start-0'}`}><i className="bi bi-search"></i></button>
                    </div>
                    <Dropdown drop='down-centered' data-bs-theme='light' className="ms-2 ms-lg-5">
                        <Dropdown.Toggle className="bg-transparent border-0 text-black d-flex h-100 align-items-center p-0 dropdown-toggle">
                            <i className='bi bi-bell fs-6'></i>
                            {notifications > 0 && <Badge pill bg='success'>{notifications}</Badge>  /* only shows if there's a notification*/}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="text-small p-2" style={{width: '20rem'}}>
                            <p>No notifications</p>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown drop='down-centered' className="ms-2 ms-lg-5">
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
            <Row 
                className="bg-light m-0 pe-0" 
                id='dash-page' style={{height : '100dvh'}}
                >
                <Col sm={2} className="px-0 d-none d-sm-flex flex-column flex-shrink-0 py-3 bg-charcoal" id='dash-sidebar'>
                    <div className="justify-content-center align-items-center text-center border-bottom border-gold mb-5">
                        <a href="/" className="d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src={logo} alt="logo" className='ms-2 img-fluid'/>
                        </a>
                    </div>
                    <Nav 
                        defaultActiveKey="explore" 
                        className="flex-column mb-auto gap-2"
                        onSelect={handleSelect}
                    >
                        <Nav.Item>
                            <Nav.Link 
                                eventKey="explore"
                                className={`text-glitter ps-4 ${tabActive === 'explore' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                            >
                                <i className="bi pe-none me-3 bi-search" width="16" height="16"></i>
                                Explore
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                eventKey="dashboard"
                                className={`text-glitter ps-4 ${tabActive === 'dashboard' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                            >
                                <i className="bi pe-none me-3 bi-speedometer" width="16" height="16"></i>
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                eventKey="history"
                                className={`text-glitter ps-4 ${tabActive === 'history' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                            >
                                <i className="bi pe-none me-3 bi-clock-history" width="16" height="16"></i>
                                History
                            </Nav.Link>
                        </Nav.Item>
                        <Button onClick={() => setOpen(!open)} as={Nav.Item}
                                className='align-items-center ps-4 bg-transparent text-start pb-0 border-0 text-glitter'
                                aria-controls='collapse-body'
                                aria-expanded={open}
                                data-bs-toggle='collapse'
                            >
                                <i className="bi pe-none me-3 bi-bookmark-heart" width="16" height="16"></i>
                                Favourites
                                <i className={`bi pe-none ms-2 pt-2 ${open? 'bi-caret-down-fill':'bi-caret-right-fill'}`} width="16" height="16"></i>
                        </Button>
                        {/* I'm only doing this to test the collapsible sidebar item. will eventually change and have all favourite categories on the single favs pages */}
                        <Collapse in={open}>
                            <div id="collapse-body" className='bg-dark bg-opacity-75 w-75 ps-3 w-100 rounded mt-0'>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey='hotels' 
                                        className={`ps-3 text-glitter ${tabActive === 'hotels' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                                    >
                                        Hotel
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey='resorts' 
                                        className={`ps-3 text-glitter ${tabActive === 'resorts' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                                    >
                                        Resort
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey='guest-houses' 
                                        className={`ps-3 text-glitter ${tabActive === 'guest-houses' ? 'bg-dark bg-opacity-75 border-end border-5 border-glitter':''}`}
                                    >
                                        Guest House
                                    </Nav.Link>
                                </Nav.Item>
                            </div>
                        </Collapse>
                    </Nav>
                    <hr></hr>
                    <Dropdown as={ButtonGroup} drop='end'>
                        <Button className="align-items-center ps-0 text-glitter" variant='none'>
                            <img src={userpic} alt="" width="32" height="32" className="rounded-circle me-4"/>
                            <strong>User</strong>
                        </Button>
                        <Dropdown.Toggle split variant='none' className='text-glitter'/>
                        <Dropdown.Menu className="text-small shadow">
                            <Dropdown.Item href="/booking"><i className="bi bi-plus-circle me-3"></i>New lodging</Dropdown.Item>
                            <Dropdown.Item href="/"><i className="bi bi-gear me-3"></i>Settings</Dropdown.Item>
                            <Dropdown.Item href="/profile"><i className="bi bi-person me-3"></i>Profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="/signout"><i className="bi bi-box-arrow-left me-3"></i>Sign out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={10}  
                    className="bg-accent bg-opacity-25 px-0 overflow-y-scroll" 
                    id='dash-content' style={{height : '100dvh'}}
                >
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
                            <InfoBar title='explore' shadow={false}/>
                            <Col xs={11} className='mx-auto'>
                                <Explore/>
                            </Col>
                        </Tab.Pane>
                        <Tab.Pane eventKey='hotels'>
                            <InfoBar title='hotels'/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default Panel