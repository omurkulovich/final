import React, { useState } from "react";
import {
  IoMdBookmark,
  IoMdCall,
  IoMdChatboxes,
  IoMdClipboard,
  IoMdClose,
  IoMdHammer,
  IoMdHome,
  IoMdImage,
  IoMdMenu,
  IoMdPerson,
} from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activateNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>

      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          <li>
            <IoMdHome className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/add">add</Link>
          </li>
          <li>
            <MdFavoriteBorder className="icon" />
            <Link to="/edit">likes</Link>
          </li>
          <li>
            <IoMdPerson className="icon" />

            <Link to="/action">action</Link>
          </li>{" "}
          <li>
            <IoMdChatboxes className="icon" />
            <Link to="/fantasy">Fantasy</Link>
          </li>
          <li>
            <IoMdCall className="icon" />
            <Link to="/">cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
