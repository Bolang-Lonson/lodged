import './howto.css';
import React, {useState} from 'react';

const HowTo = () => {
    const [isHovered, setIsHovered] = useState({
        icon1: false,
        icon2: false,
        icon3: false
    });

    const handleMouseEnter = (iconName) => {
        setIsHovered(prevState =>({
            ...prevState,
            [iconName]: true
        }));
    };

    const handleMouseLeave = (iconName) => {
        setIsHovered(prevState =>({
            ...prevState,
            [iconName]: false
        }));
    };

    return(
        <>
        <div className='container mt-5' id='howto'>
            <div className='text-center'>
                <h2>
                    <span className='me-3'><i className='bi bi-info-square'></i></span>
                    how it works
                </h2>
                <p className='lead text-muted '>As easy as foollowing these steps</p>
            </div>
            <div className='row my-5 justify-content-center align-items-center row-gap-3'>
                <div className="col-10 col-lg-4">
                    <div className="card border-primary border-2 shadow rounded-4">
                        <div className="card-header text-center text-primary">Step 1</div>
                        <div className="card-body text-center py-5">
                            <h4 className="card-title">Sign up</h4>
                            <p className="lead card-subtitle">Create an account as a lodge seeker</p>
                            <div className='my-3'>
                                <span className='display-1'><i className='bi bi-person-plus'></i></span>
                            </div>
                            <p className="card-text mx-5 text-muted d-none d-md-block">This requires a few basic details e.g. Name, email,etc.</p>
                            <div className='step-btn mt-4'>
                                <a href="/signup" className="text-primary h1">
                                    <i
                                        onMouseEnter={() => handleMouseEnter('icon1')}
                                        onMouseLeave={() => handleMouseLeave('icon1')} 
                                        className= {isHovered.icon1? 'bi bi-arrow-right-circle-fill': 'bi bi-arrow-right-circle'}
                                    >
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-lg-4">
                    <div className="card border-primary border-2 shadow rounded-4">
                        <div className="card-header text-center text-primary">Step 2</div>
                        <div className="card-body text-center py-5">
                            <h4 className="card-title">Book Lodging</h4>
                            <p className="lead card-subtitle">Find the place that matches your style</p>
                            <div className='my-3'>
                                <span className='display-1'><i className='bi bi-journal-check'></i></span>
                            </div>
                            <p className="card-text mx-5 text-muted d-none d-md-block">You can pick from a variety of available hotels, resorts and guesthouses</p>
                            <div className='step-btn mt-4'>
                                <a href="/signup" className="text-primary h1">
                                    <i
                                        onMouseEnter={() => handleMouseEnter('icon2')}
                                        onMouseLeave={() => handleMouseLeave('icon2')} 
                                        className= {isHovered.icon2? 'bi bi-arrow-right-circle-fill': 'bi bi-arrow-right-circle'}
                                    >
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="col-10 col-lg-4">
                    <div className="card border-primary border-2 shadow rounded-4">
                        <div className="card-header text-center text-primary">Step 3</div>
                        <div className="card-body text-center py-5">
                            <h4 className="card-title">Secure Payment</h4>
                            <p className="lead card-subtitle">Complete payment to book lodging</p>
                            <div className='my-3'>
                                <span className='display-1'>
                                    <i className='bi bi-credit-card mx-2'></i>
                                    <i className='bi bi-paypal mx-2'></i>
                                    <i className='bi bi-stripe mx-2'></i>
                                </span>
                            </div>
                            <p className="card-text mx-5 text-muted d-none d-md-block">Make payments to the establishments through our secure payment system.</p>
                            <div className='step-btn mt-4'>
                                <a href="/signup" className="text-primary h1">
                                    <i
                                        onMouseEnter={() => handleMouseEnter('icon3')}
                                        onMouseLeave={() => handleMouseLeave('icon3')} 
                                        className= {isHovered.icon3? 'bi bi-arrow-right-circle-fill': 'bi bi-arrow-right-circle'}
                                    >
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='partners' className='bg-light'>
            {/* A carousel with the logos of the major hotels we get to join. the most enticing list */}
            <div className='container-md py-5'>
                <div className='text-center'>
                    <h2><i className='bi bi-globe me-2'></i>We Partnered With</h2>
                </div>
                <div className='row justify-content-center my-5'>
                    <div className='col-lg-8'>
                        <div className=' list-group'>
                            <div className='list-group-item py-3'>
                                <div>
                                    <h5 className="mb-1"><i className="bi bi-buildings-fill me-2"></i>Hilton Hotel
                                        <span className='float-end'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </span>
                                    </h5>
                                    <p className="mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti temporibus nostrum quasi iusto et cupiditate blanditiis vel, quibusdam debitis impedit voluptatum alias accusantium reiciendis nisi quaerat laborum doloremque quos?</p>
                                </div>
                            </div>
                            <div className='list-group-item py-3'>
                                <div>
                                    <h5 className="mb-1"><i className="bi bi-buildings-fill me-2"></i>Mont-Febe
                                        <span className='float-end'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        </span>
                                    </h5>
                                    <p className="mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti temporibus nostrum quasi iusto et cupiditate blanditiis vel, quibusdam debitis impedit voluptatum alias accusantium reiciendis nisi quaerat laborum doloremque quos?</p>
                                </div>
                            </div>
                            <div className='list-group-item py-3'>
                                <div>
                                    <h5 className="mb-1"><i className="bi bi-buildings-fill me-2"></i>Hotel La Falaise
                                        <span className='float-end'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                        </span>
                                    </h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti temporibus nostrum quasi iusto et cupiditate blanditiis vel, quibusdam debitis impedit voluptatum alias accusantium reiciendis nisi quaerat laborum doloremque quos?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HowTo