import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Flex } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Header />
        <ProductList products={sampleProducts} />
        <Footer />
      </VStack>
    </Container>
  );
};

const Header = () => (
  <Box as="header" w="100%" p={4} bg="blue.500" color="white">
    <Heading as="h1" size="xl" textAlign="center">Electronics Store</Heading>
  </Box>
);

const ProductList = ({ products }) => (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
    {products.map(product => (
      <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src={product.imageUrl} alt={product.name} />
        <VStack spacing={4} mt={4}>
          <Heading as="h3" size="md">{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text fontWeight="bold">{product.price}</Text>
          <Button colorScheme="blue">Add to Cart</Button>
        </VStack>
      </Box>
    ))}
  </SimpleGrid>
);

const Footer = () => (
  <Box as="footer" w="100%" p={4} bg="gray.700" color="white" mt={8}>
    <Text textAlign="center">&copy; 2023 Electronics Store. All rights reserved.</Text>
  </Box>
);

export default Index;