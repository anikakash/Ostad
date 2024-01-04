import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Form style={{ width: '300px' }}>
        <h2 className="text-center mb-4">Register</h2>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
