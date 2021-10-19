import React from 'react';
import { Form, Button } from "react-bootstrap";
import formImg from "../../images/form-img.jpg"

const Contact = () => {
    return (
      <div className="row container p-3 mx-auto d-flex justify-center align-center">
        <div className="col-lg-6 col-md-6 col-12">
          <img style={{width:"100%"}} src={formImg} alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <Form className="w-75np mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Message</Form.Label>
              <textarea className="w-100"></textarea>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
};

export default Contact;