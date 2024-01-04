import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const navLinkStyle = {
    color: 'black', 
    textDecoration: 'none', 
    marginRight: '15px',
    fontSize: '16px' 

};

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://htmldemo.net/hmart/hmart/assets/images/logo/footer-logo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/products">Products</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/cart">Cart</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/checkout">Checkout</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/faq">FAQ</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/blog">Blog</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/register">Account Register</NavLink></Nav.Link>
            
            

            

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btnwidth btn-success">Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;



// import React from 'react';
// import { Navbar, Container, Nav, Button } from 'react-bootstrap'; 
// import { NavLink, Link } from 'react-router-dom';

// const Header = () => {

//     const navLinkStyle = {
//         color: 'black', 
//         textDecoration: 'none', 
//         marginRight: '15px',
//         fontSize: '16px' 

//     };

//     return (
//         <>
//             <Navbar bg="light" expand="lg">
//                 <Container>
//                     <Navbar.Brand>
//                         <img className='mt-2' src="https://htmldemo.net/hmart/hmart/assets/images/logo/logo.png" alt="Design Agency" />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarResponsive" />
//                     <Navbar.Collapse id="navbarResponsive">
//                         <Nav className="me-auto">
//                             <NavLink to='/' style={navLinkStyle}>Home</NavLink>
//                             <NavLink to='/team' style={navLinkStyle}>Team</NavLink>
//                             <NavLink to='/service' style={navLinkStyle}>Service</NavLink>
//                             <NavLink to='/project' style={navLinkStyle}>Project</NavLink>
//                             <NavLink to='/testimonial' style={navLinkStyle}>Testimonial</NavLink>
//                         </Nav>
//                         <Nav className="ms-auto">
//                             <Link  className="me-2" to="/login">
//                                 <Button className='me-2' variant="outline-success">Login</Button>
//                             </Link>
//                             <Link to="/register">
//                                 <Button variant="danger">Register</Button>
//                             </Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;
