import pc from "./../../images/image-computer.png";
import { Container, Pc } from "./styled";

export function About() {
  return (
    <Container>
     <h1>Keep track of your snippets</h1>
      <p>texto aqui</p>
      <Pc src={pc} alt="Computador" />
     <h3>oii</h3>
     <p>texto</p>
     <h3>oii</h3>
     <p>texto</p>
     <h3>oii</h3>
     <p>texto</p>
    </Container>
  );
}
