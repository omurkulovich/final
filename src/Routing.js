import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./components/Action/Action";
import Comedy from "./components/Comedy/Comedy";
import Fantasy from "./components/Fantasy/Fantasy";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/fantasy",
      element: <Fantasy />,
      id: 2,
    },
    {
      link: "/comedy",
      element: <Comedy />,
      id: 3,
    },
    {
      link: "/action",
      element: <Action />,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
