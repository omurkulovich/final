import { Carousel } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HomePage />
        <Routes>
          <Route path="/carusel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
