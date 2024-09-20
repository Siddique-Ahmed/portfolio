import React, { useContext } from "react";
import cards from "../components/SkillCard.js";
import { ThemeContext } from "../context/ThemeContextProvider.jsx";
const Skillls = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      style={{
        background: theme == "light" ? "#101820" : "",
      }}
      className="skill-section"
    >
      <h1>Professional Skills</h1>
      <div className="card-box">
        {cards.map((data, ind) => {
          return (
            <div key={ind} className="card">
              <img src={data.img} alt="" />
              <h1>{data.h1}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skillls;
