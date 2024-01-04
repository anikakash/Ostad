import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProductRequest } from '../APIRequest/apiRequest';
import SkeletonLoader from './SkeletonLoader';

const ProductList = () => {
  
    
    let [data, setData] = useState([]);

    useEffect(()=> {
        (async()=> {
            
            let res = await ProductRequest();

            setData(res)

        })()
    },[])

if(data.length===0){
    return(
        <>
            <SkeletonLoader/>
        </>
    )
}else{
    return (
        <div className="container">
          <div className="featured-heading">
            <h1 className='text-center'>Latest Products</h1>
            <h2 className='text-center'>We Provide Best Products</h2>
            <br/>
            <br/>
          </div>
          
        <Row>
            {
                data.sort((a, b) => b.price - a.price).map((item, index)=> {
                    return(
                        
                        <Col md={3} className="mb-4">
                        <Card className='cardControll'>
                        <Card.Img className='productImg' variant="top" src={item['images'][0]} alt="{title}" />
                        <Card.Body>
                            <Card.Title>{item['title']}</Card.Title>
                            <Card.Text>${item['price']}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>

                    );
                })
            }
        </Row>


          
        </div>
      );
}
   

};

export default ProductList;