import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
    const [product,setproduct]=useState('');
    const {id}=useParams();
    const getProductDetails= async()=>{
        const res=await axios.get('/products.json');
        const products=res.data.products;
        console.log('products...................',products);
        const currentProd=products.find((prod)=> prod.id === Number(id));
        setproduct(currentProd);
        
    }
   
    useEffect (()=>{
        getProductDetails();
    },[id]);
    console.log('product...................',product);
    
  return (
    <Container>
        <Row className='my-3'>
            <Col md={5}>
                <img src={product.image} alt="" className='width-100' />
            </Col>
            <Col>
            <ListGroup>
      <ListGroup.Item disabled>
        <h4>
            {product.name}
        </h4>
        </ListGroup.Item>
      <ListGroup.Item><h5>{product.brand}</h5></ListGroup.Item>
      <ListGroup.Item><h5>{product.price}</h5></ListGroup.Item>
      <ListGroup.Item><h5>{product.stock}</h5></ListGroup.Item>
      <ListGroup.Item><h5>{product.description}</h5></ListGroup.Item>
      <ListGroup.Item><h5>{product.category}</h5></ListGroup.Item>
    </ListGroup>
            </Col>
        </Row>
        
    </Container>
    
  )
}

export default ProductDetails
