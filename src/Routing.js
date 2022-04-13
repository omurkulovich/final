import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Orders />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
