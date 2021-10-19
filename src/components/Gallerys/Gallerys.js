import React from 'react';
import { Row } from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';

const Gallerys = () => {
    const photos = [
        "https://i.ibb.co/m96CWWD/adhy-savala-zbpgm-Ge27p8-unsplash.jpg",
        "https://i.ibb.co/hWsgyC0/hush-naidoo-jade-photography-ZCO-5-Y29s8k-unsplash.jpg",
        "https://i.ibb.co/CPwPgwk/martha-dominguez-de-gouveia-g0-PTp89dumc-unsplash.jpg",
        "https://i.ibb.co/GWFknkG/martha-dominguez-de-gouveia-KF-h9-HMx-RKg-unsplash.jpg",
        "https://i.ibb.co/GPtqydG/martha-dominguez-de-gouveia-k-Nn-VZ-z26w-unsplash.jpg",
        "https://i.ibb.co/zbDMGmM/martha-dominguez-de-gouveia-n-My-M7fxpok-E-unsplash.jpg",
        "https://i.ibb.co/GtQQWVH/mufid-majnun-J12-Rf-FH-2-ZE-unsplash.jpg",
        "https://i.ibb.co/nBkSyGq/national-cancer-institute-1c8sj2-IO2-I4-unsplash.jpg",
        "https://i.ibb.co/R0jxZjN/national-cancer-institute-701-FJcj-LAQ-unsplash.jpg",
        "https://i.ibb.co/MGwnCJf/olga-guryanova-t-MFeat-BSS4s-unsplash.jpg",
        "https://i.ibb.co/j4yLQsB/piron-guillaume-y5h-QCIn1c6o-unsplash.jpg"
    ]

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                photos.map(photo => <Gallery
                    photo={photo}
                ></Gallery>)
            }
        </Row>
    );
};

export default Gallerys;