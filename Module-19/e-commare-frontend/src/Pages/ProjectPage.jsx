import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from '../Components/PageTitle';
import Loader from '../Components/Loader';

const ProjectPage = () => {


    
    const [project, setProejct] = useState(null);

    useEffect(() => {
        fetch("database/projects.json")
            .then(res => res.json())
            .then(data => setProejct(data))
            .catch(error => console.error('Error fetching work list:', error));
    }, []);


    if(project === null){
        return <Loader />
    }

    return (
        <>
            <PageTitle title="Projects"/>
            <div className="service-section-container">
                <Container>
                <h1>All Project</h1>
                <h2>Better Agency/SEO Solution At Your Fingertips</h2>
                <br/>
                <br/>
                    <Row>
                        {
                            project.map((item,index)=>{
                                return (
                                    <Col key={index} md={6} className="mb-6">
                                        <div className="service-card">
                                            <img src={item.img} alt='' className="img-fluid" />
                                            <br/>
                                            <h3>{item.title}</h3>
                                            <br/>
                                            <br/>
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

export default ProjectPage;