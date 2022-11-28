import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com/dmnovb",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/boyan-damyanov-16004224b/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
              <ul>
                {socials.map(social => (
                <a key={social.id} style={{margin: '5px'}} href={social.url}><FontAwesomeIcon icon={social.icon} size={'xl'}/></a> 
                ))}
              </ul>
          </nav> 
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section">Projects</a> 
              <a href="#contact-me">Contact Me</a> 
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
