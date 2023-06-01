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
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function login() {
  return (
    <div>
      <Container>
        <form>
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
                  Login
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody p="5px" alignItems="center">
              <Input
                placeholder="Username"
                textAlign="center"
                my="10px"
                type="email"
              ></Input>
              <Input
                placeholder="Password"
                textAlign="center"
                type="password"
              ></Input>
              <Text textAlign="right" color="#E65F00">
                <Link to={""}>Forgot Password?</Link>
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
                Don't have an account?{" "}
                <Link to={"/create-store"}>
                  <Text as={"span"} color="#E65F00">
                    Create New Store
                  </Text>
                </Link>
              </Text>
            </CardBody>
          </Card>
        </form>
      </Container>
    </div>
  );
}
