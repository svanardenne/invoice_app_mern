import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = values;

  const handleChange = (fieldName) => (e) => {
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      console.log("Invalid Email");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Password and Confirm Password must match");
      return;
    }
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
      <Form onSubmit={Submit}>
        <Form.Group className="mb-3" controlId="name-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange("name")}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange("email")}
            type="text"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange("password")}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirm-password-group">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleChange("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
