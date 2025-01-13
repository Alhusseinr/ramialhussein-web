import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { timelineData } from "../data/ExperienceData";

const Experience = () => {
  return (
    <Flex direction="column" position="relative" maxWidth="800px" mx="auto">
      <Box ml={{ base: 4, xl: 0 }} mr={{ base: 4, xl: 0 }}>
        <Heading mb={4}>My Experience</Heading>
        {timelineData.map((item, index) => (
          <Flex key={index} mb={8}>
            <Box bg="gray.800" p="4" borderRadius="md" width="100%">
              <Flex
                justify="space-between"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Heading as="h3" size="md">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.400" mt={{ base: 2, md: 0 }}>
                  {item.date}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.300" mb={2}>
                {item.company} {item.location ? `| ${item.location}` : ""}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {item.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Experience;
