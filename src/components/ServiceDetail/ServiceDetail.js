import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    useEffect(() => {
        fetch("./../services.json")
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])

    const data = serviceDetail.find(service => service.id == serviceId)



    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div>
                <Row xs={1} md={1} lg={2}>
                    <Col>
                        <Card className="">
                            <Card.Img className="" variant="top" src={data?.img} />
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Card.Body>
                            <Card.Title>{data?.name}</Card.Title>
                            <Card.Text>{data?.description}</Card.Text>
                            <Button as={Link} to="/services">Go Back</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ServiceDetail;