import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleProducts from './SingleProducts';

const LatestProducts = () => {
    // const Products=[{id:1},{id:2} ,{id:3},{id:4},{id:5},{id:6}];
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      fetch("./products.json")
      .then((data)=> data.json())
      .then((res)=>setProducts(res.products));
    },[]);

    console.log('products..........',products);

  return (
    <>
    <Row>
        <Col className='my-3'>
        <h2>
            LatestProducts
        </h2>
        </Col>
      
    </Row>
    <Row>
     
        { products && products.map((product ,index)=>(
                <SingleProducts key={index} product = {product} />  
               
        ))}

    </Row>
    
    </>
  )
}

export default LatestProducts
