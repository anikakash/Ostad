// BlogArchivePage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Dummy blog data with featured image URLs
const blogData = [
  {
    id: 1,
    title: 'Lorem Ipsum Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'January 1, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 2,
    title: 'Lorem Ipsum Blog Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'February 15, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Blog Post 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'March 30, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 4,
    title: 'Lorem Ipsum Blog Post 4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'April 12, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 5,
    title: 'Lorem Ipsum Blog Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'May 24, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 6,
    title: 'Lorem Ipsum Blog Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'May 24, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 7,
    title: 'Lorem Ipsum Blog Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'May 24, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
  {
    id: 8,
    title: 'Lorem Ipsum Blog Post 5',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: 'May 24, 2023',
    imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
  },
];

const BlogList = () => {
  return (
    <>  
            <Container className="mt-5">
      <h1 className="text-center mb-4">Blog Archive</h1>
      <Row>
        {blogData.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={post.imageUrl} alt={`Featured image for ${post.title}`} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{post.date}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default BlogList;
