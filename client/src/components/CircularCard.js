import React from 'react';
import { Card } from 'react-bootstrap';

const CircularCard = ({ imageSrc, footerHeading }) => {
    return (
        <Card className="text-center mx-3 my-2" style={{ width: '15rem', border: 'none' }}>
            <div className="dflex">
                <Card.Img variant="top" src={imageSrc} className='rounded-circle' style={{ width: '10rem' }} />
            </div>
            <Card.Body>
                <Card.Title>{footerHeading}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CircularCard;