import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import { ReactChild } from "react";
import Navbar from "../Navbar/Navbar";

const DefaultLayout = ({ children }: { children: ReactChild }) => {
  return (
    <ChakraProvider>
      <Container
        display={"flex"}
        maxW={"container.md"}
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        centerContent
      >
        <VStack flex={1} spacing={16} alignItems="stretch" w="full">
          <Navbar />
          <VStack spacing={16} flex={1} w="full" as="main">
            {children}
          </VStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default DefaultLayout;
