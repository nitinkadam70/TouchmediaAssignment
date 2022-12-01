import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterUser = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="pt-4 ">
      <h2 className="mb-4 text-center">Create an Account</h2>
      <Form
        onSubmit={handleSubmit}
        className="d-flex gap-2 align-items-center justify-content-center"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            name="firstName"
            required
            type="text"
            placeholder="Enter First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            required
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            name="email"
            required
            type="email"
            placeholder="Enter Email id"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="submit"
            value="SUBMIT"
            variant="primary"
            className="btn btn-primary"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegisterUser;
