import React, { useContext } from "react";
import pic from "../imgs/icons/css-3.svg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";
import projects from "../components/projectdata";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      style={{
        background: theme === "light" ? "#101820" : "rgba(228, 228, 228, 0.33)",
      }}
      className="project-section"
    >
      <h1>My Recent Works</h1>
      <p>Here are a few Projects I,ve worked on recently</p>
      <div className="project-box">
        {projects.map((data, ind) => {
          return (
            <div
              key={ind}
              style={{
                background: theme === "light" ? "transparent" : "#fff",
                boxShadow:
                  theme === "light"
                    ? "0 0 8px #e41b24 , 0 0 8px #e41b24"
                    : "0 0 8px rgba(0, 0, 0, 0.065), 0 0 8px rgba(0, 0, 0, 0.065)",
              }}
              className="boxes"
            >
              <img src={data.img} alt="" />
              <h5>{data.head}</h5>
              <p
                style={{
                  color: theme === "light" ? "#fff" : "#000",
                }}
              >
                {data.p}
              </p>
              <div className="button-box">
                <Link to={data.git} target="blank">
                  <button>
                    {" "}
                    <i className="fa-brands fa-github"></i> DEMO
                  </button>
                </Link>
                <Link to={data.live} target="blank">
                  <button>
                    <i className="fa-solid fa-laptop"></i> LIVE
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
