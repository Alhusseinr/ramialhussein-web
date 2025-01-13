import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { timelineData, educationData } from "../data/ExperienceData";

const Experience = () => {
  return (
    <Flex direction="column" position="relative" maxWidth="800px" mx="auto">
      <Box ml={{ base: 4, xl: 0 }} mr={{ base: 4, xl: 0 }} mb={4}>
        <Heading mb={4}>Experience</Heading>
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
              <Text fontSize="sm" color="gray.300" mb={4}>
                {item.company} {item.location ? `| ${item.location}` : ""}
              </Text>
              <Text fontSize="sm" color="gray.400">
                {Array.isArray(item.description) ? (
                  item.description.map((desc, i) => (
                    <Text key={i} fontSize="sm" color="gray.400" mb={3}>
                      {desc}
                    </Text>
                  ))
                ) : (
                  <Text fontSize="sm" color="gray.400">
                    {item.description}
                  </Text>
                )}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Box ml={{ base: 4, xl: 0 }} mr={{ base: 4, xl: 0 }}>
        <Heading mb={4}>Education</Heading>
        {educationData.map((item, index) => (
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
