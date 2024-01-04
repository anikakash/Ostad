import React from 'react';
import PageTitle from '../Components/PageTitle';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const CheckoutPage = () => {
    return (
        <>
            <PageTitle title="Checkout"/>
            <Container className="mt-5">
      <Row>
        {/* Billing and Shipping Details */}
        <Col md={6}>
          <h3>Billing & Shipping Details</h3>
          <Form>
            {/* Add your billing and shipping form fields here */}
            <Form.Group controlId="billingName">
              <Form.Label>Billing Name</Form.Label>
              <Form.Control type="text" placeholder="Enter billing name" /><br/>
              <Form.Control type="text" placeholder="Enter billing name" /><br/>
              <Form.Control type="text" placeholder="Enter billing name" /><br/>
              <br/>
            </Form.Group>
            {/* Add other billing and shipping fields similarly */}
            {/* ... */}

            <Button variant="primary" type="submit">
              Continue to Payment
            </Button>

          </Form>
        </Col>

        {/* Payment Panel */}
        <Col md={6}>
          <h3>Payment</h3>
          {/* Add your payment panel design here */}
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <h4>Payment Options</h4>
            <p>Cash on Delivery</p>
            {/* You can add other payment options here */}
            {/* ... */}
          </div><br/><br/>
          <h2>Order Summary</h2>
          <ul>
            <br/>
            <li>Item 1: $10</li>
            <li>Item 2: $5</li>
            <li>Total: $15</li>
          </ul>
        </Col>
      </Row>
    </Container>
        </>
    );
};

export default CheckoutPage;