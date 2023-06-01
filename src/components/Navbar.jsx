import { Flex, Heading, Spacer, HStack, Box } from "@chakra-ui/react";

import "./logo.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Flex
        as="nav"
        p="20px"
        alignItems="center"
        bgGradient="linear(to-r, black, #14517E, #EBAE81ff)"
        minWidth="100%"
        pos="fixed"
        zIndex="overlay"
      >
        <Heading as="h1" color="#E65F00" className="logo">
          <span className="fas fa-anchor"></span>
          <Link to={"/"}>Adulis</Link>
        </Heading>
        <Spacer />

        <HStack spacing="20PX">
          {/* <Box bg="Ggrey.200" p="10px">M</Box>
    <Text color="white">Store Name</Text>
    <Button colorScheme="orange">Logout</Button> */}
          <Heading as="h3" size="md" p="2" color="#969696">
            <Link to={"/create-store"}>
              <span className="fas fa-user-plus fa-inverse"></span>
            </Link>
          </Heading>
        </HStack>
      </Flex>
      <Box p="50px"></Box>
    </div>
  );
}
