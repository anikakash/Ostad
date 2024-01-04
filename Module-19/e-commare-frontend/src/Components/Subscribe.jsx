import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/css/Subscribe.css'; 

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <Container>
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <div className="subscribe-heading">
              <h1>SUBSCRIBE</h1>
              <h2>Subscribe to get the latest news about us</h2>
            </div>
            <p>Please drop your email below to get daily updates about what we do</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <br/>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
