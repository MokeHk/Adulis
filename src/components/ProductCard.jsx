import {
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Box,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, picture }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <Card>
          <CardHeader p="0px">
            <Box
              p="1px"
              size="xs"
              color="white"
              bg="#E65F00a6"
              position="absolute"
              borderRadius="4"
              right="0"
            >
              <Text>
                <b>{price} ETB</b>
              </Text>
            </Box>
          </CardHeader>
          <CardBody p="0px">
            <Image
              src={picture}
              fit="cover"
              w="100%"
              h="140px"
              align="center"
            />
          </CardBody>
          <CardFooter p="5px">
            <Heading as="h4" size="xs" color="#333333">
              {name}
            </Heading>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
