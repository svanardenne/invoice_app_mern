import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    formData: new FormData(),
  });

  const { name, email, password, confirmPassword, formData } = values;

  const Submit = (e) => () => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={Submit}>
        <Form.Group className="mb-3" controlId="name-group">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email-group">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password-group">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirm-password-group">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
