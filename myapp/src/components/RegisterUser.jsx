import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../Redux/register/action';

const RegisterUser = () => {
  const [formData, setFormData] = useState({});

  const { loading, data, error } = useSelector(
    (store) => store.register
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(formData));
  };

  return (
    <div className="pt-4 ">
      <h2 className="mb-4 text-center">Create an Account</h2>

      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      {error && (
        <Alert className="text-center" variant="danger">
          {`${error.response.data.error.name} : ${error.response.data.error.message} `}
        </Alert>
      )}
      {data.length != 0 && (
        <Alert className="text-center" variant="success">
          {`Success : Request success with status code ${data.request.status}`}
        </Alert>
      )}
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-wrap gap-2 align-items-center justify-content-center"
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
            className="btn btn-danger"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegisterUser;
