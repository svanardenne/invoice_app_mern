import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import SignedOutHome from "./pages/SignedOutHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route exact path="/" element={<SignedOutHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
