import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Gallerys from '../Gallerys/Gallerys';
import './AboutsUs.css'

const AboutsUs = () => {

    const [aboutsUs, setAboutsUs] = useState();
    useEffect(() => {
        fetch("about.json")
            .then(res => res.json())
            .then(data => setAboutsUs(data))
    }, [])
    return (
        <div className="aboutus-height">
            {aboutsUs?.map(about => <AboutUs
                key={about.id}
                about={about}
            ></AboutUs>)}
            <Container className="my-5">
                <h2>Our Galleries</h2>
                <Gallerys></Gallerys>
            </Container>
        </div>
    );
};

export default AboutsUs;