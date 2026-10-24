import {
  Box,
  Heading,
  Flex,
  Text,
  Tag,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { caseStudies } from "../data/caseStudies";
import FadeInBox from "../shared/MotionBox";

const caseStudyCard = {
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

const TagList = ({ tags }) => (
  <Flex gap={2} wrap="wrap">
    {tags.map((tag) => (
      <Tag key={tag} bg="olive.700" color="olive.100">
        {tag}
      </Tag>
    ))}
  </Flex>
);

const CaseStudyCard = ({ study, onOpen }) => (
  <Box {...caseStudyCard}>
    <Heading size="md" color="subtleText">
      {study.title}
    </Heading>

    <Text color="muted" mt={2} mb={4}>
      {study.summary}
    </Text>

    <TagList tags={study.tags} />

    <Link
      onClick={onOpen}
      color="accent"
      mt={4}
      display="inline-block"
      cursor="pointer"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: "0",
        width: "0%",
        height: "1px",
        backgroundColor: "highlight",
        transition: "width 0.25s ease",
      }}
      _hover={{
        _after: { width: "100%" },
      }}
    >
      Read Case Study →
    </Link>
  </Box>
);

const CaseStudyModal = ({ isOpen, onClose, study, onNext }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
    <ModalOverlay />
    <ModalContent maxW={{ base: "90%", md: "xl" }} bg="bg" color="subtleText" border="1px solid" borderColor="surface">
      <ModalHeader>{study.title}</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <FadeInBox key={study.title} delay={0.1}>
          <Text color="muted" mb={4}>
            {study.fullText}
          </Text>

          <Button onClick={onNext} bg="olive.700" color="olive.100" _hover={{ bg: "olive.600" }} mt={4} mb={4}>
            Next Case Study →
          </Button>
        </FadeInBox>
      </ModalBody>
    </ModalContent>
  </Modal>
);

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (index) => {
    setCurrentIndex(index);
    onOpen();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < caseStudies.length ? prev + 1 : 0));
  };

  return (
    <Box id="case-studies">
      <FadeInBox>
        <Heading size="md" mb={6} color="accent">
          Case Studies
        </Heading>

        <Flex direction="column" gap={6}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} onOpen={() => openModal(index)} />
          ))}
        </Flex>

        <CaseStudyModal isOpen={isOpen} onClose={onClose} study={caseStudies[currentIndex]} onNext={handleNext} />
      </FadeInBox>
    </Box>
  );
};

export default CaseStudies;
