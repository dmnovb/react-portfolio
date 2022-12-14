import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      comment: ''
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Name required'),
      email: Yup.string().email('Invalid email').required('Email required'),
      comment: Yup.string().min(10, 'Comment is too short.').required('Message required')
    }),
  });

console.log(formik.touched)

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id='contact-me'
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName !== undefined && formik.touched.email}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  
                />                
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email !== undefined && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment !== undefined && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}

                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {!formik.isValid ? <Button disabled colorScheme="purple" width="full">
                Disabled
              </Button> : <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>}
              
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
