import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import Wearables from './Wearables';
const Products = () => {
    const [medicines, setMedicines] = useState([
        { name: 'Ibuprofen', price: 399 },
        { name: 'Paracetamol', price: 299 },
        { name: 'Amoxicillin', price: 699 },
        { name: 'Aspirin', price: 499 },
        { name: 'Crocin', price: 79 },
        { name: 'Dolo', price: 149 },
        { name: 'Disprin', price: 59 },
        { name: 'Calpol', price: 149 }
    ])

    const [selectedMedicine, setSelectedMedicine] = useState({});

    const handleSelect = (medicine) => {
        setSelectedMedicine(medicine);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSelectedMedicine({});
    }

    return (
        <>
        <Container className="medicine-store-container mt-5">
            <Row>
                <Col md={8} className='me-5'>
                    <h2>Medicines</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map((medicine, index) => (
                                <tr key={index}>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.price}</td>
                                    <td><Button onClick={() => handleSelect(medicine)}>Select</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={3} className='ms-5'>
                    <h2>Selected Medicine</h2>
                    <Form>
                        <Form.Group controlId="formMedicineName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={selectedMedicine.name} disabled />
                        </Form.Group>

                        <Form.Group controlId="formMedicinePrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={selectedMedicine.price} disabled />
                        </Form.Group>

                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Enter Quantity" />
                        </Form.Group>

                        <Button onClick={handleSubmit} variant="primary" type="submit" className='mt-3'>
                            Add to Cart
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        <br/>
        <br/>
        <Wearables/>
        </>
    );
};

export default Products;
