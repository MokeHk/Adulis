import {
  Heading,
  Flex,
  Input,
  Card,
  CardBody,
  CardHeader,
  Container,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

export default function CreateProduct() {
  return (
    <div>
      <Container>
        <Card>
          <CardHeader p="5px">
            <Flex alignItems="center" width="100%">
              <Heading
                as="h4"
                size="lg"
                color="#333333"
                width="100%"
                textAlign="center"
              >
                Add New Product
              </Heading>
            </Flex>
          </CardHeader>
          <CardBody p="5px" alignItems="center">
            <Input
              placeholder="Product Name"
              textAlign="center"
              my="10px"
            ></Input>
            <Input
              placeholder="Product Price"
              textAlign="center"
              type="number"
            ></Input>
            <Input
              placeholder="Product Picture"
              textAlign="center"
              type="file"
            ></Input>
            <Text textAlign="right" color="#E65F00">
              <Link>Forgot Password?</Link>
            </Text>
            <Button
              type="submit"
              my="10px"
              width="100%"
              color="White"
              bg="#E65F00"
            >
              Login
            </Button>
            <Text textAlign="center">
              I don't have an account. <Link color="#E65F00">Signup</Link>
            </Text>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
