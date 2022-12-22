import React from "react";
import Projects from "../../components/Project";

import project3 from "../../assets/images/project3.jpeg";

const Portfolio = (singleProject) => {

  const projectList = [
    {
      title: "LiftoSphere",
      summary: "The application is a social network for individuals who have an interest in health and fitness can share their thoughts, make friends, and communicate.",
      image: project3,
      technologies: "Node.js, JavaScript, GraphQl, React, Mern, Bootstrap.css, Express, nodemon, mongoose",
      deployedLink: "https://pacific-retreat-64211.herokuapp.com/",
      github: "https://github.com/MarkAnthony9014/fitness-project-3",
    }
  ];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;