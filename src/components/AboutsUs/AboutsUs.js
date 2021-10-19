import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Gallerys from '../Gallerys/Gallerys';
import './AboutsUs.css'
import { HashLink } from 'react-router-hash-link';

const AboutsUs = () => {

    const data = [{
        id: 1,
        name: "About Us",
        img: "https://i.ibb.co/XVN8jwk/main-2-2.png",
        title: "Welcome to City Health Care",
        description: "WeCare Nursing Home & Diagnostic Centre has been setting standards since its inception in and regarded as one of the best hospitals out of Kolkata, West Bengal. WE CARE NURSING HOME & DIAGNOSTIC CENTRE is a 54 bedded multi-speciality nursing home & integrated medical centre based out of Kolkata serving the communities across Howrah and Hooghly district. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education. It is a multi-speciality nursing home with experience in quality healthcare practices that integrate clinical and health care services through constant innovation and education."
    }]

    return (

        <div id="about">
            <div>
                <Row xs={1} md={1} lg={2} className="d-flex justify-content-center align-items-center">
                    <Col>
                        <img src={data[0].img} alt="" height="100%" />
                    </Col>
                    <Col className="text-start px-5">

                        <small >{data[0].name}</small>
                        <h2>{data[0].title}</h2>
                        <p>{data[0].description}</p>
                        <Nav.Link as={HashLink} to="/about#about"><button className="btn btn-outline-dark">See More</button></Nav.Link>
                    </Col>
                </Row>
            </div>
            <Container className="my-5">
                <h2>Our Galleries</h2>
                <Gallerys></Gallerys>
            </Container>
        </div>

    );
};

export default AboutsUs;