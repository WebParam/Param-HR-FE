import {
  Center,
  Box
} from "@chakra-ui/react";
import React from "react";

var version = process.env.BUILD_DATE;

export const ContainerApp = () => {
  return (
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Box color="#fff" position="fixed" right="0" top="0" mr="2rem" mt="2rem">
        Container
      </Box>
    </Center>
  );
};
