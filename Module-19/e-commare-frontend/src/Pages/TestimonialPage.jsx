import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';
import '../assets/css/Testimonials.css'; // Import your custom styles for Testimonials component
import Loader from '../Components/Loader';

const TestimonialPage = () => {


    const [testimonial, setTestimonial] = useState(null);

    useEffect(() => {
        fetch("database/testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonial(data))
            .catch(error => console.error('Error fetching work list:', error));
    }, []);


    if(testimonial === null){
        return <Loader />
    }




  return (
    <>
        <PageTitle title="Testimonial"/>
    <div className="testimonials-container">
      <Container>
      <h1>Testimonial List</h1>
          <h2>Better Agency/SEO Solution At Your Fingertips</h2>
          <br/>
          <br/>
        <Row>
            {
                testimonial.map((item, index)=>{
                    return(
                        <Col md={4} className="mb-4">
                        <div className="testimonial-card">
                          <div className="testimonial-img">
                            <img src={item.img} alt='' className="img-fluid rounded-circle" />
                          </div>
                          <div className="testimonial-content">
                            <p>{item.text}</p>
                            <h3>{item.title}</h3>
                            <p className="job-title">{item.designation}</p>
                          </div>
                        </div>
                      </Col>
                    )
                })
            }
        </Row>
      </Container>
    </div>
    </>
  );
};

export default TestimonialPage;
