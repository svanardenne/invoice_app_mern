import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <div className="jumbotron row justify-content-center">
          <div className="center">
            <h1>Welcome to the Invoice App</h1>
            <h2>Sign up to stary using the App!</h2>
          </div>
          <Link
            className="btn btn-lg btn-primary col-md-3 col-lg-2"
            to="/signup"
          >
            Sign Up!
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
