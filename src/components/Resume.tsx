import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { FaFileAlt } from 'react-icons/fa';

const Resume = () => {

  const handleOpenPDF = () => {
    const pdfUrl = '/files/Resume.pdf'; // Replace with the actual path to your PDF
    window.open(pdfUrl, '_blank');
  };

  return (
    <Box id="resume" maxW="800px" mx="auto" py={10}>
      <Heading mb={4}>Resume</Heading>
      <Button as="a" onClick={handleOpenPDF} rel="noopener noreferrer" colorScheme="blue">
        <FaFileAlt /> View My Resume
      </Button>
    </Box>
  );
};

export default Resume;