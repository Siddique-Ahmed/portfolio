import React, { useContext } from "react";
import myPic2 from "../imgs/myPic2.jpg";
import { ThemeContext } from "../context/ThemeContextProvider";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      style={{
        background: theme === "light" ? "#101820" : "#eee",
      }}
      className="about-container"
    >
      <h1>About Me</h1>
      <div className="content">
        <div className="leftSide">
          <img src={myPic2} alt="" />
        </div>
        <div className="rightSide">
          <p
            style={{
              color:
                theme === "light" ? "rgba(228, 228, 228, 0.33)" : "#101820",
            }}
          >
            Hi! I'm <span>Siddique Ahmed</span>, a passionate MERN Stack with a
            knack for HTML, CSS, JavaScript, responsive websites. <br />
            I have a strong background in
            HTML,CSS,JavaScript,TypeScript,Tailwind CSS,Bootstrap,Firebase,ECMA
            6,React Js, and love working with technologies like React
            Native,MongoDB,Material UI,And Design,Next Js,Express Js.
            <br />I Intermediate from Shipowner govt College Karachi with a
            degree in I.COM. Since then,
            <br />
            I've worked on a variety of projects that helped me enhance my
            skills in Websites e.g TODO App,Weather App,ChatBot,and more. <br />
            In my free time, I enjoy Listening Music,Singing and Learning About
            technologies. I'm always eager to learn more and take on new
            challenges. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
