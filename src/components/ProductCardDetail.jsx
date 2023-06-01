import {
  Heading,
  Flex,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Container,
  Spacer,
  HStack,
  Box,
  Text,
  Table,
  Td,
  Tr,
  Tbody,
  SimpleGrid,
} from "@chakra-ui/react";

export default function ProductCardDetail({
  name,
  price,
  description,
  picture,
  specs,
}) {
  return (
    <div>
      <Container maxWidth={"100%"}>
        <Card>
          <CardHeader p="5px">
            <Flex alignItems="center" width="100%">
              <Heading as="h4" size="sm" color="#333333">
                {name}
              </Heading>
            </Flex>
          </CardHeader>
          <SimpleGrid columns={2} spacing={3} minChildWidth={[250, 300]}>
            <CardBody p="5px">
              <Card>
                <HStack>
                  <Box
                    p="3px"
                    size="xs"
                    color="white"
                    bg="#E65F00a6"
                    borderRadius="4"
                    position="absolute"
                    right={"0"}
                    marginTop={"8"}
                  >
                    <Text>{price} ETB</Text>
                  </Box>
                </HStack>
                <Image src={picture} w="100%" fit="cover" h="auto" />
              </Card>
              <Box maxWidth={"97%"}>
                <Heading as="h4" size="sm" color="#333333">
                  Details:
                </Heading>
                <Text textAlign="justify" maxWidth={"100%"}>
                  {description}
                </Text>
              </Box>
            </CardBody>
            <CardFooter p="5px">
              <Container maxWidth="90%">
                <Table colorScheme="orange" variant="simple">
                  <Tbody>
                    {specs.map((prop, index) => {
                      return (
                        <Tr key={index}>
                          <Td>
                            <b>{prop.key}</b>
                          </Td>
                          <Td>{prop.value}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </Container>
            </CardFooter>
          </SimpleGrid>
        </Card>
      </Container>
    </div>
  );
}
