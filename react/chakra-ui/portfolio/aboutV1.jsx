// import {
//   Box,
//   Heading,
//   Text,
//   Link,
//   Flex,
//   SimpleGrid,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from "@chakra-ui/react";

// import { skills } from "../data/skills";
// import { hobbies } from "../data/hobbies";
// import FadeInBox from "../shared/MotionBox";

// const skillPill = {
//   px: 3,
//   py: 1,
//   borderRadius: "md",
//   bg: "surface",
//   color: "muted",
//   fontSize: "sm",
//   border: "1px solid",
//   borderColor: "surface",
//   transition: "0.25s ease",
//   _hover: {
//     transform: "scale(1.05)",
//     filter: "brightness(1.15)",
//   },
// };

// const hobbyItem = {
//   align: "center",
//   gap: 3,
//   mb: 3,
//   color: "muted",
//   fontSize: "md",
//   pl: "25px",
//   transition: "all 0.25s ease",
//   _hover: {
//     transform: "scale(1.05)",
//     filter: "brightness(1.15)",
//   },
// };

// const About = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const aboutModal = { isOpen, onClose };

//   return (
//     <Box id="about" mt={7}>
//       <FadeInBox>
//         <Heading size="md" mb={4} color="accent">
//           About Me
//         </Heading>

//         <Text color="muted" maxW={{ base: "85%", md: "625px" }} lineHeight="1.7" mb={3}>
//           Focusing on creating digital products shaped by clear architecture, cohesive flow, and subtle details that
//           make technology feel intuitive, reliable, and seamless.
//         </Text>

//         {/* Skills */}
//         <Box mt={2}>
//           <Heading size="sm" color="highlight" mb={3} letterSpacing="0.5px" fontWeight="600">
//             Skills I Use
//           </Heading>

//           <Flex wrap="wrap" gap={2} maxW={{ base: "90%", md: "560px" }}>
//             {skills.map((skill) => (
//               <Box key={skill} {...skillPill}>
//                 {skill}
//               </Box>
//             ))}
//           </Flex>
//         </Box>

//         <Link
//           onClick={onOpen}
//           color="highlight"
//           cursor="pointer"
//           display="inline-block"
//           mt={3}
//           position="relative"
//           _after={{
//             content: '""',
//             position: "absolute",
//             bottom: "-2px",
//             left: 0,
//             width: "0%",
//             height: "1px",
//             backgroundColor: "highlight",
//             transition: "width 0.25s ease",
//           }}
//           _hover={{
//             _after: { width: "100%" },
//           }}
//         >
//           Read More →
//         </Link>
//       </FadeInBox>

//       <Modal {...aboutModal} size="xl" isCentered>
//         <ModalOverlay />
//         <ModalContent
//           bg="bg"
//           color="text"
//           border="1px solid"
//           borderColor="surface"
//           transform={{ base: "none", md: "translateX(-380px)" }}
//           maxW={{ base: "90%", md: "xl" }}
//         >
//           <ModalHeader color="accent">About Me</ModalHeader>
//           <ModalCloseButton />

//           <ModalBody>
//             <FadeInBox>
//               <Text color="muted" mb={4}>
//                 I care about visual harmony, system‑level thinking, and component‑driven architecture — creating
//                 interfaces that feel intuitive, calm, and human-centered.
//               </Text>

//               <Text color="muted" mb={4}>
//                 I enjoy working with React, Chakra UI, JavaScript, and design systems, focusing on workflow
//                 optimization, theme development, AI-assisted tooling, and delivering products that feel premium and
//                 intentional.
//               </Text>

//               <Text color="muted" mb={6}>
//                 Outside of coding, these are my hobbies that keep me balanced:
//               </Text>
//             </FadeInBox>

//             <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} mb={6}>
//               {hobbies.map((item) => (
//                 <FadeInBox delay={0.12}>
//                   <Flex key={item.text} {...hobbyItem}>
//                     <Box fontSize="2xl" color="highlight">
//                       <item.icon />
//                     </Box>
//                     <Text>{item.text}</Text>
//                   </Flex>
//                 </FadeInBox>
//               ))}
//             </SimpleGrid>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default About;

import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { skills } from "../data/skills";
import { hobbies } from "../data/hobbies";
import FadeInBox from "../shared/MotionBox";

const skillPill = {
  px: 3,
  py: 1,
  borderRadius: "md",
  bg: "surface",
  color: "muted",
  fontSize: "sm",
  border: "1px solid",
  borderColor: "surface",
  transition: "0.25s ease",
  _hover: {
    transform: "scale(1.05)",
    filter: "brightness(1.15)",
  },
};

// Updated hobby card style matching your reference image
const hobbyItem = {
  align: "center",
  justify: "center",
  direction: "row",
  p: 4,
  bg: "surface", // Matches your dark theme surface color
  borderRadius: "xl",
  border: "1px solid",
  borderColor: "surface",
  gap: 3,
  color: "text",
  fontSize: "md",
  fontWeight: "medium",
  transition: "all 0.25s ease",
  _hover: {
    transform: "translateY(-2px)",
    borderColor: "highlight",
    filter: "brightness(1.15)",
  },
};

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const aboutModal = { isOpen, onClose };

  return (
    <Box id="about" mt={7}>
      <FadeInBox>
        <Heading size="md" mb={4} color="accent">
          About Me
        </Heading>

        <Text color="muted" maxW={{ base: "85%", md: "625px" }} lineHeight="1.7" mb={3}>
          Focusing on creating digital products shaped by clear architecture, cohesive flow, and subtle details that
          make technology feel intuitive, reliable, and seamless.
        </Text>

        {/* Skills */}
        <Box mt={2}>
          <Heading size="sm" color="highlight" mb={3} letterSpacing="0.5px" fontWeight="600">
            Skills I Use
          </Heading>

          <Flex wrap="wrap" gap={2} maxW={{ base: "90%", md: "560px" }}>
            {skills.map((skill) => (
              <Box key={skill} {...skillPill}>
                {skill}
              </Box>
            ))}
          </Flex>
        </Box>

        <Link
          onClick={onOpen}
          color="highlight"
          cursor="pointer"
          display="inline-block"
          mt={3}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: 0,
            width: "0%",
            height: "1px",
            backgroundColor: "highlight",
            transition: "width 0.25s ease",
          }}
          _hover={{
            _after: { width: "100%" },
          }}
        >
          Read More →
        </Link>
      </FadeInBox>

      <Modal {...aboutModal} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          bg="bg"
          color="text"
          border="1px solid"
          borderColor="surface"
          transform={{ base: "none", md: "translateX(-380px)" }}
          maxW={{ base: "90%", md: "xl" }}
        >
          <ModalHeader color="accent">About Me</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FadeInBox>
              <Text color="muted" mb={4}>
                I care about visual harmony, system‑level thinking, and component‑driven architecture — creating
                interfaces that feel intuitive, calm, and human-centered.
              </Text>

              <Text color="muted" mb={4}>
                I enjoy working with React, Chakra UI, JavaScript, and design systems, focusing on workflow
                optimization, theme development, AI-assisted tooling, and delivering products that feel premium and
                intentional.
              </Text>

              <Text color="muted" mb={6}>
                Outside of coding, these are my hobbies that keep me balanced:
              </Text>
            </FadeInBox>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={6}>
              {hobbies.map((item) => (
                <FadeInBox key={item.text} delay={0.12}>
                  <Flex {...hobbyItem}>
                    <Box fontSize="xl" color="highlight">
                      <item.icon />
                    </Box>
                    <Text>{item.text}</Text>
                  </Flex>
                </FadeInBox>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
