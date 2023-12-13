import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 3,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
