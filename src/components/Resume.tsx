import React from 'react';
import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import { FaFileAlt } from 'react-icons/fa';

const Resume = () => {

  const handleOpenPDF = () => {
    const pdfUrl = './files/Resume.pdf'; // Replace with the actual path to your PDF
    window.open(pdfUrl, '_blank');
  };

  return (
    <Flex id="resume" direction="column" position="relative" maxWidth="800px" mx="auto">
      <Box pb={10} ml={{ base: 4, xl: 0 }} mr={{ base: 4, xl: 0 }}>
        <Heading mb={4}>Resume</Heading>
        <Button as="a" onClick={handleOpenPDF} rel="noopener noreferrer" colorScheme="blue">
          <FaFileAlt /> View My Resume
        </Button>
      </Box>
    </Flex>
  );
};

export default Resume;