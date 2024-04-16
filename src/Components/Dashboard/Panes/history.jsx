import {Col} from 'react-bootstrap';

const History = ({setShadow}) => {
    setShadow(true);

    return (
        <Col xs={11} className='mx-auto'>
            <div className="row">
                <div className="col-12">
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
        </Col>
    );
};

export default History;