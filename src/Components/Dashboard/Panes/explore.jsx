import landpic from '../../../Assets/Images/landpic-min.jpg';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import React, { useState} from 'react';
import pic from '../../../Assets/Images/landpic-min.jpg';

const HotelCard = ({image}) => {
    return (
        <Card bg='charcoal' className='rounded-4 border-0 my-4'>
            <Card.Img src={image.url} alt='Hotel image' className='rounded-4 opacity-75' style={{ maxHeight: '35rem'}}/>
            <Card.ImgOverlay className='align-content-end text-glitter'>
                <Card.Title>
                    <i className="bi bi-buildings-fill me-3"></i>
                    {`${image.title[0]+image.title.slice(1).toLowerCase()} Hotel`}
                    <span className='float-end text-warning fs-6'>
                        <small className="bi bi-star-fill"></small>
                        <small className="bi bi-star-fill"></small>
                        <small className="bi bi-star-fill"></small>
                        <small className="bi bi-star-fill"></small>
                        <small className="bi bi-star-fill"></small>
                    </span>
                </Card.Title>
                <Card.Text><small>{image.caption}</small></Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

const Explore = ({setShadow}) => {
    setShadow(false);
    const [lookup, setLookup] = useState('');
    const [inFocus, setInFocus] = useState(false);
    const [images, setImages] = useState([]);

    const apiToken = 'T1RLAQJKaJzgXYcnTcrc09TS1Ech94x/lqdPDXSEcy/OezER6RB1jwrYpQOpAEtP2FEl2CRNAADggIUY87PkIpv4ZDhaTCjEz3LfVTaIJKfNIBQpZh4+Z16zF0HyhiNA/uAvKW4UE/xrvaPGahAvS0l8UZdg8GrHhYJti9FK2iYdJdNgPS5R6ru8ch8sQd6iQIC+SR0H3i191z0nql7oSeilodj4qwZUdWy7insgMgd5XKjvgXOt/uxkiuQAyxdwrbJs69xYXo3fGpXWL3oXEANeYiBI14xdm5W570ErFIQtv+cOGVtqT7wXVpvmlvb4o8eMqq6Pzsoc7VdJtU5ttCnXJg1F0DBpvLOoThV8mE/r9F3LM1MVAGA*';

    async function fetchImage(category) {
        return await fetch('https://api.cert.platform.sabre.com/v1.0.0/shop/hotels/media', {
            method: "post",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "authorization": `Bearer ${apiToken}`
            },
            body: JSON.stringify({
                "GetHotelMediaRQ": {
                    "HotelRefs": {
                        "HotelRef": [
                        {
                            "HotelCode": "426",
                            "CodeContext": "Sabre",
                            "ImageRef": {
                                "MaxImages": "6",
                                "Images": {
                                    "Image": [
                                    {
                                        "Type": "ORIGINAL"
                                    }
                                    ]
                                },
                                "Categories": {
                                    "Category": [
                                    {
                                        "Code": category
                                    }
                                    ]
                                },
                                "AdditionalInfo": {
                                    "Info": [
                                    {
                                        "Type": "CAPTION",
                                        "content": true
                                    }
                                    ]
                                },
                                "Languages": {
                                    "Language": [
                                    {
                                        "Code": "EN"
                                    }
                                    ]
                                }
                            }
                        }
                        ]
                    }
                }
            })
        }).then(resp => resp.json())
        .then(data => {return {
            title: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].HotelInfo.Marketer,
            url: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].ImageItems.ImageItem[0].Images.Image[0].Url,
            caption: data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].ImageItems.ImageItem[0].AdditionalInfo.Info[0].Description.Text[0].content
        }})
        // debugging and testing response content
    };

    const loadCards = () => {
        let imgs = [];
        [2, 3, 4, 5].forEach(categ => fetchImage(categ).then(data => imgs.push(data)));
        setImages(imgs);
        console.log(imgs, images);
    }

    return (
        <Col xs={11} className='mx-auto'>
            <Row className="mb-5">
                <Col xs={12} md={10} lg={7} className='mx-auto'>
                    <p className="display-6 fw-bold">Find your stay</p>
                    <Col xs={12} md={9} lg={12} className='d-flex flex-row gap-3 mb-5 mx-auto'>
                        <Form.Control
                            type='search' value={lookup} onChange={(e) => setLookup(e.target.value)}
                            size='lg' className={`rounded-4 fs-6 focus-ring focus-ring-success ${inFocus? 'border-0':''}`}
                            placeholder='Search' onFocus={() => setInFocus(true)} onBlur={() => setInFocus(false)}
                        />
                        <Button 
                            onClick={loadCards} 
                            variant='success' className='px-3 rounded-4 focus-ring focus-ring-success'
                        >
                            <i className="bi bi-sliders lead"></i>
                        </Button>
                    </Col>
                    <h5 className='mb-3'>Nearby Lodging <i className="ms-2 bi bi-geo"></i></h5>
                    <Card bg='charcoal' className='rounded-4 border-0 my-4'>
                        <Card.Img src={pic} alt='Hotel image' className='rounded-4 opacity-75' style={{ maxHeight: '35rem'}}/>
                        <Card.ImgOverlay className='align-content-end text-glitter'>
                            <Card.Title>
                                <i className="bi bi-buildings-fill me-3"></i>
                                Hilton Hotel
                                <span className='float-end text-gold fs-6'>
                                    <small className="bi bi-star-fill"></small>
                                    <small className="bi bi-star-fill"></small>
                                    <small className="bi bi-star-fill"></small>
                                    <small className="bi bi-star-fill"></small>
                                    <small className="bi bi-star-fill"></small>
                                </span>
                            </Card.Title>
                            <Card.Text><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus porro, voluptatibus repellat tempore libero quae illum</small></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    {images && images.map((image, index) => {
                        return (
                            <HotelCard image={image} key={index}/>
                        )
                    })}
                    <div className="card border-0 rounded-4 shadow-sm">
                        <div className="card-header text-capitalize bg-white rounded-4 rounded-bottom-0 p-3">
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
        </Col>
    );
};

export default Explore;