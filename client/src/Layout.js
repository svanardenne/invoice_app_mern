import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container></Container>
    </React.Fragment>
  );
};

export default Layout;
