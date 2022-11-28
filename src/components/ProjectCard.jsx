import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  
  return (
    <HStack>
    <Card maxW='sm' background={'white'}>
    <CardBody>
    <Image src={imageSrc}/>
    <VStack mt='6' spacing='4'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
    </VStack>
  </CardBody>
</Card>
    </HStack>
  )
};

export default ProjectCard;
