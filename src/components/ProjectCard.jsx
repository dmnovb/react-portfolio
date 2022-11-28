import { Heading, HStack, Image, Text, VStack, Card, CardHeader, CardBody, CardFooter, Divider, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc, stack, projectUrl }) => {
  
  return (

  <Card background={'white'}>
    <CardBody >
      <Image
        src={imageSrc}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='2'>
        <Heading size='md' >{title}</Heading>
        <Text color={'gray'} p={'4px'}>
          {description}
        </Text>
      </Stack>
      <Divider></Divider>
      <Text fontWeight={'bold'} p={'5px'}> Stack: {stack}</Text>
      <Divider></Divider>
      <a href={projectUrl}>  <Text color='black' fontSize='1xl'>
        See More
        &nbsp;
        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </Text></a> 
      </CardBody>
  </Card> 
  )
};

export default ProjectCard;
