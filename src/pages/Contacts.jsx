import { useState } from "react";
import { Alert, Button, Form, Row } from "react-bootstrap"

const Contacts = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
});

const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const validate = () => {
    let formErrors = {};
    if (!formData.name) {
        formErrors.name = "Name is required";
    }
    if (!formData.email) {
        formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
        formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
        formErrors.password = "Password must be at least 6 characters";
    }
    return formErrors;
};

const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
        setSubmitted(true);
        console.log('Form Data Submitted:', formData);
        
    } else {
        setErrors(validationErrors);
        setSubmitted(false);
    }
};

return (
    <div>
        <Row className="mx-5 my-5 justify-content-center" md={12}>
            <Form className="w-50" onSubmit={handleSubmit}>
                {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Enter name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Enter email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Row>
    </div>
  )
}

export default Contacts
