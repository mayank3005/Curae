import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import ChatBot from 'react-simple-chatbot';
import basicSteps from '../basicSteps';
import Navbar from '../components/Navbar';

const FAQ = [
    { question: 'What is the cost of the healthcare service?', answer: 'Please contact our customer service for pricing information.' },
    { question: 'Do you accept insurance?', answer: 'Yes, we accept most major insurance plans. Please bring your insurance card with you to your appointment.' },
    { question: 'What services do you offer?', answer: 'We offer a wide range of healthcare services, including primary care, specialty care, and diagnostic testing.' },
    { question: 'What is your cancellation policy?', answer: 'Please contact our customer service for information regarding our cancellation policy.' },
    { question: 'How do I schedule an appointment?', answer: 'You can schedule an appointment by calling our customer service or using our online booking system.' },
];

const HealthCareFAQ = () => {
    return (
        <>
            <Navbar />
            <Container className="my-5">
                <Row>
                    <Col md={7} className="text-center order-md-1 order-1">
                        <h2>Frequently Asked Questions</h2>
                        {FAQ.map((item, index) => (
                            <div key={index} className="my-4">
                                <FontAwesomeIcon icon={faQuestionCircle} size="2x" className="mr-3" />
                                <h5 className="d-inline">{item.question}</h5>
                                <p className="mt-3">{item.answer}</p>
                            </div>
                        ))}
                    </Col>
                    <Col md={4} className="ml-auto mt-4 text-center d-flex flex-column justify-content-center align-items-end order-md-2 order-2">
                        <div className='d-flex align-items-center justify-content-evenly mr-4'>
                            <h2>Chat with Us</h2>
                            <FontAwesomeIcon icon={faComments} size="2x" className="my-4 ml-3 mr-3" />
                        </div>
                        <div className="mt-3 ml-auto">
                            <ChatBot steps={basicSteps} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HealthCareFAQ;
