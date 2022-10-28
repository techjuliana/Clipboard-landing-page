import pc from "./../../images/image-computer.png";
import { Container, Pc } from "./styled";

export function About() {
  return (
    <Container>
     <h1 className="texto-titulo">Keep track of your snippets</h1>
     <p className="texto">Clipboard instantly stores any item you copy in the cloud, meaning you can access 
      <br/>your snippets immediately on all your devices. Our Mac and iOS apps will help you<br/>organize everything.</p>

<div className="canto">
      <Pc src={pc} alt="Computador" />
      <div className="listagem">
     <h3>Quick Search</h3>
     <p>Easily search your snippets by content, <br/> category, web address, aplication, and more.</p>
     <h3>iCloud Sync</h3>
     <p>Instantly saves and syncs snippets across all<br/>your devices.</p>
     <h3>Complete History</h3>
     <p>Retrieve any snippets from the first moment<br/>you started using the app.</p>
     </div>
     </div>

    </Container>
  );
}
