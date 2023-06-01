import { useState, useEffect } from "react";

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
  SimpleGrid,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  ownerName: "47",
  storeName: "fortySeven",
  storeCategory: "",
  storeLocation: "",
  phoneNumber: "",
  isMember: true,
};

export default function createStore() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      password,
      ownerName,
      storeName,
      storeCategory,
      storeLocation,
      phoneNumber,
      isMember,
    } = values;
    const currentUser = {
      username,
      password,
      ownerName,
      storeName,
      storeCategory,
      storeLocation,
      phoneNumber,
      isMember,
    };
    console.log(values);
  };

  return (
    <div>
      <Container maxWidth="90%">
        <form onSubmit={onSubmit}>
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
                  Create Store
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody p="5px" alignItems="center">
              <SimpleGrid
                columns={[1, 2, 3, 4]}
                spacing={3}
                minChildWidth={[180, 300]}
              >
                <Text>
                  <label htmlFor="username">Username:</label>
                  <Input
                    type="email"
                    value={values.username}
                    name="username"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="password">Password:</label>
                  <Input
                    required={true}
                    type="password"
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="ownerName">Owner's Name:</label>
                  <Input
                    required={true}
                    type="String"
                    value={values.ownerName}
                    name="ownerName"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="storeName">Store Name:</label>
                  <Input
                    required={true}
                    type="String"
                    value={values.storeName}
                    name="storeName"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="storeCategory">Store Category:</label>
                  <Input
                    required={true}
                    type="String"
                    value={values.storeCategory}
                    name="storeCategory"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="storeLocation">Store Location:</label>
                  <Input
                    required={true}
                    type="String"
                    value={values.storeLocation}
                    name="storeLocation"
                    onChange={handleChange}
                  />
                </Text>
                <Text>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <Input
                    required={true}
                    type="Number"
                    value={values.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </Text>
                <Button
                  my="6"
                  type="submit"
                  maxwidth="100%"
                  color="White"
                  bg="#E65F00"
                >
                  Create
                </Button>
              </SimpleGrid>
              <Text textAlign="right" color="#E65F00">
                <Link to={""}>Forgot Password?</Link>
              </Text>
              <Text textAlign="center">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <Text as="span" color="#E65F00">
                    Login
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
