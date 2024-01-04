import React, { useEffect, useState } from 'react';
import '../assets/css/Featured.css';
import { Card, Col, Image, Row } from 'react-bootstrap';

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("database/featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch((error) => console.error('Error fetching work list:', error));
  }, []);

  return (
    <div className="container">
      <div className="featured-heading">
        <h1 className='text-center'>Featured Products</h1>
        <h2 className='text-center'>We provide the Perfect Solution to your business growth</h2>
        <br/>
        <br/>
      </div>
      <Row>
        <Col md={6}>
          <Image src="https://www.macworld.com/wp-content/uploads/2023/01/apple-products-2018-100782368-orig.jpg?quality=50&strip=all" className="img-fluid" alt="Full width image" />
          <br />
          <br />
          <p>App Design - June 20, 2022</p>
          <h2>App Redesign</h2>
        </Col>
        <Col md={6}>
          <Row className="g-4">
            {featured.map((item, index) => (
              <Col md={6} key={index}>
                <Card>
                  <Image src={item.image} className="img-fluid" alt="Card image" />
                  <Card.Body>
                    <p>{item.date}</p>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
