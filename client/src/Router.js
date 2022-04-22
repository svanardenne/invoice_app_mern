import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import SignedOutHome from "./pages/SignedOutHome";
import Help from "./pages/Help";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route exact path="/" element={<SignedOutHome />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
