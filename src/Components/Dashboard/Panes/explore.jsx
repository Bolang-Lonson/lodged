import landpic from '../../../Assets/Images/landpic-min.jpg';
import { Row, Col, Button, Form } from 'react-bootstrap';
import React, {useState} from 'react';

const Explore = () => {

    const [inFocus, setInFocus] = useState(false);
    return (
        <>
            <Row className="mb-4">
                <Col xs={12}>
                    <p className="display-6 fw-bold">Find your stay</p>
                    <Col xs={12} md={9} className='d-flex flex-row gap-3 mb-5 mx-auto'>
                        <Form.Control
                            type='search'
                            size='lg' className={`rounded-4 fs-6 focus-ring focus-ring-success ${inFocus? 'border-0':''}`}
                            placeholder='Search' onFocus={() => setInFocus(true)} onBlur={() => setInFocus(false)}
                        />
                        <Button variant='success' className='px-3 rounded-4 focus-ring focus-ring-success'><i className="bi bi-sliders lead"></i></Button>
                    </Col>
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
                </Col>
            </Row>
        </>
    );
};

export default Explore;