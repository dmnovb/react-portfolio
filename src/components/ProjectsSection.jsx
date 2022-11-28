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
    getImageSrc: () => require("../images/istockphoto-1147544807-612x612.jpg"),
  },
  {
    title: "todo-app",
    description:
      "Basic to-do app. Can add and delete to-do's. ",
      stack:"Express.js, React.js, MongoDB",
    getImageSrc: () => require("../images/todo-app.png"),
  },
  {
    title: "react-shop",
    description:
      "A 'shop' app made with React. Can create and delete items and add them to the shopping cart.",
    stack: "React.js, Express.js, MongoDB, Typescript",
    getImageSrc: () => require("../images/react-shop.png"),
  },
  {
    title: "javascript-pong-game",
    description:
      "Pong game, its purpose was for me to see how vanilla js interacts with the dom",
    stack: "Javascript",
    getImageSrc: () => require("../images/pong-game.png"),
  },
  {
    title: "weather-app",
    description:
      "weather app for fetching weather, very simple",
    stack: "React.js, Tailwind CSS",
    getImageSrc: () => require("../images/weather-app.png"),
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
