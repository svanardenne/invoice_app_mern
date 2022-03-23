import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <h1>I am the body!</h1>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
