import pc from "./../../images/image-computer.png";
import { Container, Pc } from "./styled";

export function About() {
  return (
    <Container>
     <h1>Keep track of your snippets</h1>
     <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access 
      <br/>your snippets immediately on all your devices. Our Mac and iOS apps will help you<br/>organize everything.</p>
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
