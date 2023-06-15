import { Flex, Spinner } from '@chakra-ui/react';

export const LoadingScreen = () => (
  <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
    <Spinner />
  </Flex>
);
