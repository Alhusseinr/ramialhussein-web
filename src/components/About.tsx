import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box 
        id="about"
        maxW="800px" 
        mx="auto"
        py={10} 
    >
        <Box 
            id="about-content"
            ml={{ base: 4, xl: 0 }}
            mr={{ base: 4, xl: 0 }}
        >
            <Heading mb={4}>Who am I</Heading>
            <Text>
                I am an experienced Software Engineer based in the New York Metropolitan area with a proven track record of leading end-to-end project delivery. I excel at optimizing software performance, improving system efficiency, and collaborating with cross-functional teams to develop innovative and effective solutions. I particularly enjoy backend development, creating scalable, high-performance systems that drive impactful results.
            </Text>
        </Box>
    </Box>
  );
};

export default About;