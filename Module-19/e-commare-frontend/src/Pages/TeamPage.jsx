import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';
import Loader from '../Components/Loader';

const TeamPage = () => {

    const [members, setMembers] = useState(null);

    useEffect(() => {
        fetch("database/members.json")
            .then(res => res.json())
            .then(data => setMembers(data))
            .catch(error => console.error('Error fetching work list:', error));
    }, []);


    if(members === null){
        return <Loader />
    }

    
    return (
        <div>
            <PageTitle title="Team"/>
            <Container>
        <div className="team-members-heading">
          <h1>Our Team Members</h1>
          <h2>Check our awesome team members</h2>
        </div>

        <br/>
        <br/>
        <Row>
            {
                members.map((item, index)=>{
                    return (
                        <Col md={4} className="mb-4">
                        <Card className="text-center">
                          <Image src={item.image} className="img-fluid" />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <div className="social-media">
                              <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="me-2 fab fa-facebook"></i>
                              </a>
                              <a href={item.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="me-2 fab fa-twitter"></i>
                              </a>
                              <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="me-2 fab fa-instagram"></i>
                              </a>
                              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                })
            }
        </Row>
      </Container>


        </div>
    );
};

export default TeamPage;