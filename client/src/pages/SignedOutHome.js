import { Link } from "react-router-dom";

const SignedOutHome = () => {
  return (
    <div className="jumbotron row justify-content-center">
      <div className="center">
        <h1>Welcome to the Invoice App</h1>
        <h2>Sign up to stary using the App!</h2>
      </div>
      <Link className="btn btn-lg btn-primary col-md-3 col-lg-2" to="/signup">
        Sign Up!
      </Link>
    </div>
  );
};

export default SignedOutHome;
