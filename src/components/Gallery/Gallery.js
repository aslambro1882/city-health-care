import React from 'react';
import { Col, Container } from 'react-bootstrap';

const Gallery = ({ photo }) => {
    return (

        <Col>
            <img className="rounded" src={photo} alt="" width="100%" />
        </Col>

    );
};

export default Gallery;