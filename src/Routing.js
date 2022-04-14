import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Action from "./components/Action/Action";
import Add from "./components/Add/Add";
import AddList from "./components/AddList/AddList";
import Comedy from "./components/Comedy/Comedy";
import Edit from "./components/Edit/Edit";
import Fantasy from "./components/Fantasy/Fantasy";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Favorites from "./components/Favorites/Favorites";
import Orders from "./components/Orders/Orders";

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
      id: 4,
    },
    {
      link: "/add",
      element: <Add />,
      id: 5,
    },
    {
      link: "/addcard",
      element: <AddList />,
      id: 6,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 8,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 9,
    },
    {
      link: "/orders",
      element: <Orders />,
      id: 10,
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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
