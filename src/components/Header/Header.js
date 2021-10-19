import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    console.log("from user", user);



    return (
        <>
            <Navbar className="shadow" collapseOnSelect expand="md" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src="https://i.ibb.co/jWKFF1Y/6223854185-16cccb93-b61e-4326-9aa2-2f5558b06bba.png" alt="" width="100" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-dark fw-bold" className="text-dark fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/services">Our Services</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link className="text-dark fw-bold" as={Link} to="/about">About</Nav.Link>


                        {!user?.email ? <span className="d-flex">
                            <Nav.Link className="text-dark fw-bold" as={Link} to="/login">Sign In</Nav.Link>
                            <Nav.Link className="text-dark fw-bold" as={Link} to="/register">Sign Up</Nav.Link>
                        </span> :
                            <button onClick={logOut} className="btn btn-dark me-2">Sign out</button>}


                        <Navbar.Text>
                            {user?.email && <span>{user?.displayName?.slice(0, 10)}</span>}
                        </Navbar.Text>

                        <div>
                            <img className="rounded-circle w-50" src={user?.photoURL} alt="" />
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;