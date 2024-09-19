import React, { useState, useEffect, useContext } from "react";
import logo from "../imgs/mypic1.jpg";
import { ThemeContext } from "../context/ThemeContextProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const specialties = [
    "HTML.....",
    "CSS.....",
    "Bootstrap.....",
    "JavaScript.....",
    "ECMA 6.....",
    "Firebase.....",
    "TypeScript.....",
    "Tailwind.....",
    "React JS.....",
  ];
  const [currentSpecialty, setCurrentSpecialty] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = specialties[currentSpecialty];
    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 140);

      return () => clearInterval(typingInterval);
    } else {
      const clearInterval = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentSpecialty(
          (prevIndex) => (prevIndex + 1) % specialties.length
        );
      }, 1000);

      return () => clearTimeout(clearInterval);
    }
  }, [charIndex, currentSpecialty]);

  return (
    <section
      style={{
        background: theme === "light" ? "#101820" : "rgba(228, 228, 228, 0.33)",
      }}
      className="home-section"
    >
      <div className="leftSide">
        <h1>
          HI Everyone, I'am <span>Siddique Ahmed</span>
        </h1>
        <h3>Passionate MERN Stack Developer</h3>
        <h2
          style={{
            color: theme === "light" ? "#fff" : "#000",
          }}
        >
          Specialist in: <span className="typing-text">{displayText}</span>
        </h2>
      </div>
      <div className="rightSide">
        <img
          style={{
            border: theme === "light" ? "2px solid #fff" : "2px solid #000",
          }}
          src={logo}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
