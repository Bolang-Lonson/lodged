import landpic from '../../../Assets/Images/landpic-min.jpg';
import { Row, Col, Button } from 'react-bootstrap';


const Dashboard = (props) => {
    return (
        <Row>
            <Col xs={12} md={10} className='mx-auto'>
                <Row className="mb-4 row-gap-4">
                    <Col xs={12} md={5} lg={4}>
                        <div className="card rounded-4 border-0 shadow-sm bg-white bg-opacity-100">
                            <div className="card-body text-center p-5">
                                <h5 className="card-title text-charcoal fs-4">Wallet <i className="ms-1 bi bi-wallet2"></i></h5>
                                <div className="my-3"><span className="display-3 text-success fw-bold">$00.00</span></div>
                                <a href="/deposit" className="mt-3 btn btn-outline-success rounded-3 align-items-center">Deposit <i className="bi bi-plus-circle"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={7} lg={8}>
                        <div className="card rounded-4 border-0 shadow-sm">
                            <div className="card-body text-center py-5 px-4 px-md-5">
                                <h5 className="card-title text-charcoal fs-4">Upcoming Bookings <i className="ms-1 bi bi-journals"></i></h5>
                                <div className="my-3 rounded-3">
                                    <div className="table-responsive small">
                                        <table className="table table-striped table-success text-gold table-sm">
                                            <thead>
                                                <tr className='text-glitter'>
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
                                <Button 
                                    variant='dominant' onClick={() => props.switchPane('explore')}
                                    className="w-100 text-center text-white"
                                >
                                    Create New Booking
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <div className="card border-0 rounded-4 shadow-sm">
                            <div className="card-header text-capitalize bg-white rounded-4 rounded-bottom-0 p-3">
                                <h4 className='mb-0 text-charcoal'>Nearby Lodging <i className="ms-2 bi bi-geo"></i></h4>
                            </div>
                            <div className="card-body">
                                <div className="list-group">
                                    <div className="list-group-item border-0 border-bottom">
                                        <h5 className="mb-0"><i className="bi bi-buildings-fill me-3"></i>
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
                                        <h5 className="mb-0"><i className="bi bi-buildings-fill me-3"></i>
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
                                        <h5 className="mb-0"><i className="bi bi-buildings-fill me-3"></i>
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
                            <div className="align-items-center pb-3 pe-5 text-end"><a href="/lodgings">See more &gt;&gt;</a></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Dashboard;