import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <div className="mb-3">
              <img className='footer-logo' src="https://htmldemo.net/hmart/hmart/assets/images/logo/logo.png"alt="Agency Logo" /> <br/><br/>
              <p>Some footer text about the Agency. Just a little description to help people understand you better.</p>
            </div>
            <div className="social-media">



            <Row className="">
        <Col xs="auto">
          <a href="#" className="text-light nav-link me-2">
            <i className="fab fa-facebook-f"></i>
          </a>
        </Col>
        <Col xs="auto">
          <a href="#" className="text-light nav-link me-2">
            <i className="fab fa-twitter"></i>
          </a>
        </Col>
        <Col xs="auto">
          <a href="#" className="text-light nav-link me-2">
            <i className="fab fa-instagram"></i>
          </a>
        </Col>
      </Row>


            </div>
            <p className="mt-3">&copy; {new Date().getFullYear()} Your Agency</p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light nav-link">Services</a></li>
              <li><a href="#" className="text-light nav-link">Portfolio</a></li>
              <li><a href="#" className="text-light nav-link">About Us</a></li>
              <li><a href="#" className="text-light nav-link">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Address</h5>
            <p>Design Agency Head Office.<br />
              Airport Road<br />
              United Arab Emirates</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
