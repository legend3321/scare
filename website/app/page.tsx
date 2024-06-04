import { Container } from "@mui/material";
import Hero from "./_components/Hero";
import About from "./_components/About";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
    </Container>
  );
}
