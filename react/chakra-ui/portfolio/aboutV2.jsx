import { Box, Heading, Flex, Text, Icon } from "@chakra-ui/react";
import { hobbies } from "../data/hobbies";
import FadeInBox from "../shared/MotionBox";

const aboutCardStyle = {
  p: 6,
  borderRadius: "lg",
  borderBottom: "1px solid",
  borderColor: "surface",
  transition: "0.35s ease",
  _hover: {
    transform: { base: "translateY(-2px)", md: "scale(1.03)" },
    backdropFilter: "blur(18px) brightness(1.1)",
    bg: "rgba(255,255,255,0.05)",
  },
};

const HobbyCard = ({ hobby }) => {
  const IconComponent = hobby.icon;

  return (
    <Box {...aboutCardStyle} display="flex" alignItems="center" gap={4}>
      <Box p={3} borderRadius="md" bg="surface" color="accent">
        <Icon as={IconComponent} boxSize={5} />
      </Box>
      <Text color="subtleText" fontWeight="medium">
        {hobby.text}
      </Text>
    </Box>
  );
};

const AboutMe = () => {
  return (
    <Box id="about-me" my={10}>
      <FadeInBox>
        <Heading size="md" mb={4} color="accent">
          About Me
        </Heading>

        <Text color="muted" mb={8} lineHeight="tall">
          Hi! I'm a UX Engineer passionate about bridging the gap between design and front-end code. When I'm not
          building sleek interfaces or optimizing web components, you can find me exploring my favorite interests:
        </Text>

        <Flex display="grid" gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} />
          ))}
        </Flex>
      </FadeInBox>
    </Box>
  );
};

export default AboutMe;
