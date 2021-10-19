import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])

    const [doctors, setDoctors] = useState();
    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0, 3)))
    }, [])

    const [abouts, setAbouts] = useState();
    console.log(abouts)
    useEffect(() => {
        fetch("about.json")
            .then(res => res.json())
            .then(data => setAbouts(data.slice(0, 1)))
    }, [])



    return (
        <div>
            <Banner></Banner>
            <div className="mt-5">
                <h2 className="p-5 fw-bold text-dark text-center m-0">Our Services</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services?.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
            <div className="mt-5">
                <h2 className="p-4 text-dark  text-center m-0">Our Doctors</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        doctors?.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </div>
            <div className="mt-5">
                <h2 className="p-4 text-dark text-center m-0">About US</h2>
                {
                    abouts?.map(about => <AboutUs
                        key={about.id}
                        about={about}
                    ></AboutUs>)
                }
            </div>


        </div>
    );
};

export default Home;