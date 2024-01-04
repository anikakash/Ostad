// src/CartPage.js
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';

const CartPage = () => {
  return (
    <>
        <PageTitle title="Cart"/>
        <Container className="mt-5">
      <h2>Your Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Static content for demonstration */}
          <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>$20.00</td>
            <td>2</td>
            <td>$40.00</td>
            <td>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Product 2</td>
            <td>$30.00</td>
            <td>1</td>
            <td>$30.00</td>
            <td>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="text-right">
        <h4>Total: $70.00</h4>
        <Button variant="success">Checkout</Button>
      </div>
    </Container>
    </>
  );
};

export default CartPage;
