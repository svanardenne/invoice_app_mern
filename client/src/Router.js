// Global Imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Element Imports
import Layout from "./Layout";
import SignedOutHome from "./pages/SignedOutHome";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route exact path="/" element={<SignedOutHome />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
