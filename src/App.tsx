import { Container } from '@chakra-ui/react';
import { Timer } from './components/Timer';

export function App() {
  return (
    <Container maxW="container.md" minH="100vh" display="flex" alignItems="center">
      <Timer />
    </Container>
  );
}
