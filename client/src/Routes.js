import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default Routes;
