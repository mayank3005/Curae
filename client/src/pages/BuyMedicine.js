import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import PayPal from '../components/PayPal';

const Products = () => {
  // eslint-disable-next-line
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
  const [cartItems, setCartItems] = useState([]);
  const [payment, setPayment] = useState(false);

  const handleSelect = (medicine) => {
    setSelectedMedicine({ ...medicine, quantity: 1 });
  }

  const handleChange = (event) => {
    setSelectedMedicine({ ...selectedMedicine, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCartItems([...cartItems, selectedMedicine]);
  }

  const handleBuy = () => {
    setPayment(true);
  }

  return (
    <>
      <Navbar />
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
            <Form className='mb-5'>
              <Form.Group controlId="formMedicineName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" onChange={handleChange} value={selectedMedicine?.name} disabled />
              </Form.Group>

              <Form.Group controlId="formMedicinePrice">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" type="text" onChange={handleChange} value={selectedMedicine?.price} disabled />
              </Form.Group>

              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control name="quantity" type="number" min={1} onChange={handleChange} placeholder="Enter Quantity" value={selectedMedicine.quantity} />
              </Form.Group>

              <Button onClick={handleSubmit} variant="primary" type="submit" className='mt-3'>
                Add to Cart
              </Button>
            </Form>

            {
              cartItems.length === 0 ? null :
                <>

                  <h2>Cart</h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((medicine, index) => (
                        <tr key={index}>
                          <td>{medicine.name}</td>
                          <td>{medicine.price}</td>
                          <td>{medicine.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Button onClick={handleBuy} variant="primary" type="submit" className='mt-3'>
                    Buy Now
                  </Button>
                </>
            }
          </Col>
        </Row>
      </Container>

      {
        payment ? <>
          <div className='text-center mt-5 pt-5'>
            <div className="payment-text">
              <h2 className="display-5">
                You may proceed with the transaction
              </h2>
            </div>
            <PayPal />
          </div>
        </> : null
      }

    </>
  );
};

export default Products;