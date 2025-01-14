import React from "react";
import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from "react-icons/fa";
import TimeComponent from "./Time";


const Header = () => {
  return (
    <Box as="header" color="white" py={6}>
      <Flex px={12} justify="center" flexDirection="column" alignItems="center">
        {/* Name and Title */}
        <Text fontWeight="bold" textStyle="xl">
          Rami Alhussein
        </Text>
        <Text fontWeight="bold" textStyle="xl">
          Software Engineer
        </Text>

        {/* Links Row */}
        <Flex mt={4} display={{ base: "none", md: "block" }}>
          <Link
            href="https://www.linkedin.com/in/rami-alhussein/"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
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

        <TimeComponent />
      </Flex>
    </Box>
  );
};

export default Header;
