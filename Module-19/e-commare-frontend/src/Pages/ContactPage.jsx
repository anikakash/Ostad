import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';

const ContactPage = () => {
  return (
   <>
         <PageTitle title="Contact"/>
    <Container className="mt-5">
      <Row>
        {/* Left side - Contact Form */}
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form>
            {/* Include your contact form fields here */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            {/* Add more form fields as needed */}
            <br/>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Col>

        {/* Right side - Contact Information */}
        <Col md={6}>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 123 Main Street, Cityville, Country
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Fax:</strong> +1 (555) 987-6543
          </p>
          {/* Add other contact information as needed */}
        </Col>
      </Row>
    </Container>
   </>
  );
};

export default ContactPage;
