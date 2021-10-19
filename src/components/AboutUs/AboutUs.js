import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = ({ about }) => {
    console.log(about)

    const { img, description, title, name } = about;
    return (
        <div className="bg-info about border p-3">

            <Row xs={1} md={1} lg={2} className="d-flex justify-content-center align-items-center">
                <Col>
                    <img src={img} alt="" height="100%" />
                </Col>
                <Col className="text-start px-5">

                    <small >{name}</small>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to="/about"><button className="btn btn-outline-dark">See More</button></Link>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;