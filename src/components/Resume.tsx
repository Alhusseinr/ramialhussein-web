import React from "react";
import { Box, Heading, Button, Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from "react-icons/fa";

const Resume = () => {
  const handleOpenPDF = () => {
    const pdfUrl = "./files/Resume.pdf"; // Replace with the actual path to your PDF
    window.open(pdfUrl, "_blank");
  };

  return (
    <Box id="my links" display={{ base: "block", md: "none" }} ml={{ base: 4, xl: 0 }} mr={{ base: 4, xl: 0 }} mb={12} >
      <Flex direction="row" position="relative" maxWidth="800px" mx="auto" justify={{ base: "center" }}>
        <Link
          href="https://www.linkedin.com/in/rami-alhussein/"
          target="_blank"
          rel="noopener noreferrer"
          mr={2}
        >
          <Icon boxSize={6}>
            <FaLinkedin />
          </Icon>
        </Link>
        <Link
          href="mailto:alhusseinfba98@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          <Icon boxSize={6}>
            <FaEnvelope />
          </Icon>
        </Link>
        <Link
          href="https://github.com/Alhusseinr"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          <Icon boxSize={6}>
            <FaGithub />
          </Icon>
        </Link>
        <Link
          as="a"
          href="./files/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          <Icon boxSize={6}>
            <FaFileAlt />
          </Icon>
        </Link>
      </Flex>
    </Box>
  );
};

export default Resume;
