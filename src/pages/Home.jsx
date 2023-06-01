import { SimpleGrid, Container } from "@chakra-ui/react";

import ProductCard from "../components/ProductCard";
import { getProducts } from "../FakeData/TestData";

export default function Home() {
  const products = getProducts();
  return (
    <div>
      <Container maxWidth="95%">
        <SimpleGrid columns={4} spacing={3} minChildWidth={120}>
          {products.map((products) => {
            return <ProductCard key={products.id} {...products}></ProductCard>;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
}
