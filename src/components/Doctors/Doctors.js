import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState();
    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;