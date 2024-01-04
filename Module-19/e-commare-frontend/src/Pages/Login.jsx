import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Form style={{ width: '300px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
