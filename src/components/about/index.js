import pc from "./../../images/image-computer.png";
import { Container, Pc, Titulo, Paragrafo, Sobre, Listagem } from "./styled";

export function About() {
  return (
    <Container>
      <Titulo>Keep track of your snippets</Titulo>
      <Paragrafo>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access
        <br />
        your snippets immediately on all your devices. Our Mac and iOS apps will
        help you
        <br />
        organize everything.
      </Paragrafo>

      <Sobre>
        <Pc src={pc} alt="Computador" />
        <Listagem>
          <h3>Quick Search</h3>
          <p>
            Easily search your snippets by content, <br /> category, web
            address, aplication, and more.
          </p>
          <h3>iCloud Sync</h3>
          <p>
            Instantly saves and syncs snippets across all
            <br />
            your devices.
          </p>
          <h3>Complete History</h3>
          <p>
            Retrieve any snippets from the first moment
            <br />
            you started using the app.
          </p>
        </Listagem>
      </Sobre>
    </Container>
  );
}
