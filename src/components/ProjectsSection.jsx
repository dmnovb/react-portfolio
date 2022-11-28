import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "wow-character-api",
    description:
      "wow armory api for fetching my character's armor in-game, made in laravel. Made for the purpose of testing laravel.",
    stack: "Laravel",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "todo-app",
    description:
      "Basic to-do app. Can add and delete to-do's. ",
      stack:"Express.js, React.js, MongoDB",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "react-shop",
    description:
      "A 'shop' app made with React. Can create and delete items and add them to the shopping cart.",
    stack: "React.js, Express.js, MongoDB, Typescript",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "javascript-pong-game",
    description:
      "Pong game, its purpose was for me to see how vanilla js interacts with the dom",
    stack: "Javascript",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
  {
    title: "weather-app",
    description:
      "weather app for fetchi weather, very simple",
    stack: "React.js, Tailwind CSS",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
 
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
