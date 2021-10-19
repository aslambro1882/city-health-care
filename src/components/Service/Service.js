import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, img, name, description } = service;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img className="h-100" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 80)}</Card.Text>
                    <Button as={Link} to={`/service/${id}`}>Book Appoint</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;