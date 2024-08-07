import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProducts = ({ product }) => {
  return (
    <Col md={3} className='mb-4'>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link className='btn btn-primary'  to={`/product/${product.id}`} variant="primary">Go info</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleProducts;

