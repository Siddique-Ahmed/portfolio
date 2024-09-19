import React, { useContext, useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleHamburger() {
    setIsOpen((open) => (open === false ? true : false));
  }

  return (
    <nav
      style={{
        background: theme === "light" ? "#101820" : "#fff",
      }}
    >
      <div className="logo">
        <Link to={"/"}>
          <img height={90} width={90} src={logo} alt="" />
        </Link>
      </div>
      <ul
        style={{
          left: isOpen === true ? "0" : "-700px",
          background: theme === "light" ? "#101820" : "#fff",
        }}
        className="links"
      >
        <li>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to={"/skills"}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            to={"/projects"}
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="theme">
        <i
          style={{
            color: theme === "light" ? "#e41b24" : "#000",
          }}
          onClick={toggleHamburger}
          className={isOpen === true ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
        <button
          style={{
            background: theme === "light" ? "#e41b24" : "transparent",
            color: theme === "light" ? "#fff" : "#e41b24",
            border: theme === "light" ? "" : "1px solid #e41b24",
          }}
          onClick={toggleTheme}
          className="fa-solid fa-moon"
        ></button>
      </div>
    </nav>
  );
};

export default Header;
