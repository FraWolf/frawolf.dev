import { Box, Container, Flex, Grid, Text } from "@chakra-ui/layout";
import { Heading, Image, Spacer } from "@chakra-ui/react";

export default function Home() {
  return (
    // {/* <Flex mt={24} mb={8} justifyContent={"flex-end"} flexDirection={"column"}> */}
    <>
      {/* <Grid gap={12}> */}
      <Box colSpan={10}>
        <Heading size="lg" mb={4}>
          Hello, I'm Francesco Lombardo
        </Heading>
        <Text fontSize="lg">I'm a junior Full Stack Developer</Text>
      </Box>
      {/* <Box colSpan={1}>
        <Image
          src="https://private.phantomsec.dev/"
          alt="Francesco Lombardo"
          borderRadius="full"
        />
      </Box>
      </Grid> */}
    </>
    //   </Flex>
  );
}
