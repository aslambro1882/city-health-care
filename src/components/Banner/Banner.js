import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';







const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/SmCWwm7/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.jpg"
                        alt="First slide"
                        height="450"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/GTQxp1k/ibrahim-boran-zs-KFQs2k-Dp-M-unsplash.jpg"
                        alt="Second slide"
                        height="450"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jks9HhS/julia-zyablova-S1v7h-VUi-Cg0-unsplash.jpg"
                        alt="Third slide"
                        height="450"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="bg-info p-4">
                <Container>
                    <Row >
                        <Col lg={5}>
                            <div className="w-75">
                                <h2>Appointment</h2>
                                <p>Short Summary for the appointment callout box goes here and you can add more content using shortcode Appointment CallOut</p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col className="m-2">
                                    <input className="w-100" type="text" placeholder="Name" />
                                </Col>
                                <Col className="m-2">
                                    <input className="w-100" type="email" placeholder="Email" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="m-2">
                                    <input className="w-100" type="date" placeholder="Date" />
                                </Col>
                                <Col className="m-2">
                                    <input className="w-100" type="number" placeholder="Phone" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Banner;