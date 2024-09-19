import React, { useContext } from "react";
import img from "../imgs/dev.gif";
import { ThemeContext } from "../context/ThemeContextProvider";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      style={{
        background: theme === "light" ? "#101820" : "rgba(228, 228, 228, 0.33)",
      }}
      className="contact-section"
    >
      <div className="leftSide">
        <img src={img} alt="" />
      </div>
      <div className="rightSide">
        <form>
          <h1>Contact Us.</h1>
          <div className="input-box">
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email address" />
          </div>
          <div className="input-box">
            <label htmlFor="desc">Description</label>
            <textarea placeholder="Description" id="desc" cols={40} rows={7}></textarea>
          </div>
          <div className="input-box">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
