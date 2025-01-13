import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from "react-icons/fa";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hours = time.getHours();
    const day = time.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = day === 0 || day === 6;
  
    if (isWeekend) {
      setMessage("Relax! It's the weekend, I am propably working on my car or speeding on the highway");
    } else if (hours >= 0 && hours < 5) {
      setMessage("It's late! I am most likely sleeping");
    } else if (hours >= 5 && hours < 12) {
      setMessage("I am probably coding, and in meetings");
    } else if (hours >= 12 && hours < 17) {
      setMessage("Trying to stay productive while fighting the afternoon slump");
    } else if (hours >= 17 && hours < 24) {
      setMessage("Probably eating, coding, or working on my car");
    }
  }, [time]);

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
        <Flex mt={4}>
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

        {/* Time and Message Row */}
        <Box mt={8} textAlign="center">
          <Text fontSize="md" mt={2}>
            its{" "}
            {time.toLocaleTimeString("en-US", {
              timeZone: "America/New_York",
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            EST: {message}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
