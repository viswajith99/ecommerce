import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';

const Addproduct = () => {
    const [validated, setValidated] = useState(false);
    const [productData, setProductData] = useState({
        productName: '',
        productCategory: '',
        productPrice: '',
        productStock: '',
        productPhoto: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log('Product created successfully');
        }
        setValidated(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleFileChange = (e) => {
        setProductData({ ...productData, productPhoto: e.target.files[0] });
    };

    return (
        <Container className='justify-content-center'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-50 my-4'>
                <Row className="mb-3">
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="text"
                            name='productName'
                            placeholder="Product Name"
                        />
                        <Form.Control.Feedback type="invalid">Enter the Product Name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="text"
                            name='productCategory'
                            placeholder="Category"
                        />
                        <Form.Control.Feedback type="invalid">Enter the category</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom03">
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <Form.Control
                                onChange={handleChange}
                                required
                                type="number"
                                name='productPrice'
                                placeholder="Price"
                            />
                            <Form.Control.Feedback type="invalid">Enter the price</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="validationCustom04">
                        <Form.Label>Stock</Form.Label>
                        <InputGroup>
                            <Form.Control
                                onChange={handleChange}
                                required
                                type="number"
                                name='productStock'
                                placeholder="Stock"
                            />
                            <Form.Control.Feedback type="invalid">Enter the stock</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="validationCustom05" className="mb-3">
                        <Form.Label>Upload Product Photo</Form.Label>
                        <Form.Control type="file" name='productPhoto' onChange={handleFileChange} />
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );
};

export default Addproduct;
