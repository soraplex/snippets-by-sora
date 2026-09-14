import { Box, Heading, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";
import { experience } from "../data/experience";
import { useEffect, useRef, useState } from "react";

const ExperienceTabs = () => {
  const tabRefs = useRef([]);
  const [highlightY, setHighlightY] = useState(0);
  const [highlightH, setHighlightH] = useState(0);

  const handleTabChange = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      setHighlightY(tab.offsetTop);
      setHighlightH(tab.offsetHeight);
    }
  };

  useEffect(() => {
    const first = tabRefs.current[0];
    if (first) {
      setHighlightY(first.offsetTop);
      setHighlightH(first.offsetHeight);
    }
  }, []);

  return (
    <Box id="experience">
      <Heading size="md" mb={6} color="accent">
        Experience
      </Heading>

      <Tabs orientation="vertical" variant="unstyled" onChange={handleTabChange}>
        <Box position="relative">
          {/* Vertical highlight bar */}
          <Box
            position="absolute"
            right="-2px"
            width="3px"
            bg="accent"
            borderRadius="full"
            transition="transform 0.25s ease"
            transform={`translateY(${highlightY}px)`}
            height={`${highlightH}px`}
            boxShadow="0 0 12px accent"
          />

          <TabList borderRight="1px solid" borderColor="surface" pr={4} minW="190px" minH="300px">
            {experience.map((job, i) => (
              <Tab
                key={i}
                ref={(el) => (tabRefs.current[i] = el)}
                color="muted"
                py={3}
                textAlign="left"
                fontWeight="500"
                position="relative"
                transition="all 0.25s ease"
                /* Subtle hover zoom */
                _hover={{
                  transform: "scale(1.04)",
                  filter: "brightness(1.15)",
                }}
                /* Active tab (no zoom, just color) */
                _selected={{
                  color: "highlight",
                  fontWeight: "600",
                  transform: "scale(1)", // prevents zoom on active
                  filter: "brightness(1)",
                }}
              >
                {job.company}
              </Tab>
            ))}
          </TabList>
        </Box>

        <TabPanels pl={6}>
          {experience.map((job, i) => (
            <TabPanel key={i}>
              <Heading size="md" color="subtleText">
                {job.role}
              </Heading>
              <Text color="subtleText" mt={1} mb={4}>
                {job.date}
              </Text>
              {job.jobDescription.map((b, idx) => (
                <Flex key={idx} mb={2} align="flex-start" gap={2}>
                  <Text color="accent" mt="2px">
                    ▹
                  </Text>
                  {/* <Text color="accent" mt="2px">➥</Text> */}
                  <Text color="muted">{b}</Text>
                </Flex>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ExperienceTabs;