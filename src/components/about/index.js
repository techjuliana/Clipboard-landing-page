import pc from "./../../images/image-computer.png";
import { Container, Pc } from "./styled";

export function About() {
  return (
    <Container>
     <h1>Keep track of your snippets</h1>
     <p className="texto">Clipboard instantly stores any item you copy in the cloud, meaning you can access 
      <br/>your snippets immediately on all your devices. Our Mac and iOS apps will help you<br/>organize everything.</p>

<div className="canto">
      <Pc src={pc} alt="Computador" />
      <div className="listagem">
     <h3>oii</h3>
     <p>texto</p>
     <h3>oii</h3>
     <p>texto</p>
     <h3>oii</h3>
     <p>texto</p>
     </div>
     </div>

    </Container>
  );
}
