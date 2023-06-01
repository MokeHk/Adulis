import { Flex, Heading, Box, SimpleGrid } from "@chakra-ui/react";

export default function FooterMenu() {
  return (
    <div>
      <Box p="40px"></Box>
      <Flex
        as="nav"
        p="10px"
        alignItems="center"
        bg="#FAFAFA"
        minWidth="100%"
        pos="fixed"
        bottom="0"
        zIndex="overlay"
      >
        <SimpleGrid columns={3} width="100%">
          <Heading as="h1" size="md" textAlign="center" color="#969696">
            <span className="fas fa-list"></span>
          </Heading>
          <Heading as="h1" size="md" textAlign="center" color="#E65F00">
            <span className="fas fa-landmark"></span>
          </Heading>
          <Heading as="h1" size="md" textAlign="center" color="#969696">
            <span className="fas fa-search"></span>
          </Heading>
        </SimpleGrid>
      </Flex>
    </div>
  );
}
