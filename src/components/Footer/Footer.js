import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-4 mh-100">
            <Container>
                <div className="d-flex justify-content-start">
                    <h1>City Health Care</h1>
                </div>
                <ul className="">
                    <Link className="text-white text-decoration-none me-4 text-dark fw-bold fs-5" to="/home">Home</Link>
                    <Link className="text-white text-decoration-none me-4 text-dark fw-bold fs-5" to="/about">About</Link>
                    <Link className="text-white text-decoration-none me-4 text-dark fw-bold fs-5" to="/services">Our Services</Link>
                    <Link className="text-white text-decoration-none me-4 text-dark fw-bold fs-5" to="/doctors">Doctors</Link>
                    <Link className="text-white text-decoration-none me-4 text-dark fw-bold fs-5" to="/blogs">Blogs</Link>
                </ul>
            </Container>
        </div>
    );
};

export default Footer;