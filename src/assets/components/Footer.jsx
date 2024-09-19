import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      style={{
        background: theme === "light" ? "#101820" : "rgba(228, 228, 228, 0.33)",
        boxShadow:
          theme === "light"
            ? "0 0 8px rgba(0,0,0,0.065),0 0 8px rgba(0,0,0,0.065)"
            : "0 0 8px rgba(0,0,0,0.065),0 0 8px rgba(0,0,0,0.065)",
      }}
    >
      <h1
        style={{
          color: theme === "light" ? "#fff" : "#f25b24",
        }}
      >
        ♡♡ Developed By <span>SIDDIQUE AHMED ♡♡</span>
      </h1>
      <div className="links">
        <Link
          style={{
            background: theme === "light" ? "#f25b24" : "#e41b24",
          }}
          to={"https://github.com/Siddique-Ahmed"}
          target="blank"
        >
          <i className="fa-brands fa-github github"></i>
        </Link>
        <Link
          style={{
            background: theme === "light" ? "#f25b24" : "#e41b24",
          }}
          to={"https://www.linkedin.com/in/siddique-ahmed-8a3009297/"}
          target="blank"
          className="linkedin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link
          style={{
            background: theme === "light" ? "#f25b24" : "#e41b24",
          }}
          to={
            "https://www.instagram.com/codewithfun764/?next=%2Faccounts%2Flogout%2F"
          }
          target="blank"
          className="instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link
          style={{
            background: theme === "light" ? "#f25b24" : "#e41b24",
          }}
          to={"https://www.youtube.com/@Codewithfun07"}
          target="blank"
          className="youtube"
        >
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
