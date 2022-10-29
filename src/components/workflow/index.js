import google from "./../../images/logo-google.png";
import hp from "./../../images/logo-hp.png";
import ibm from "./../../images/logo-ibm.png";
import microsoft from "./../../images/logo-microsoft.png";
import graphics from "./../../images/logo-vector-graphics.png";
import blacklist from "./../../images/icon-blacklist.svg";
import icontext from "./../../images/icon-text.svg";
import preview from "./../../images/icon-preview.svg";

import {
  Container,
  Paragrafo,
  Listagem,
  ListagemSuperior,
  Marcas,
} from "./styled";

export function Workflow() {
  return (
    <Container>
      <h1>Supercharge your workflow</h1>
      <Paragrafo>We've got the tools to boost your productivity</Paragrafo>
      <Listagem>
        <ListagemSuperior>
          <img src={blacklist} alt="" height="40" width="40" />
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its
            <br />
            way to your clipboard by excluding certain
            <br />
            sources.
          </p>
        </ListagemSuperior>
        <ListagemSuperior>
          <img src={icontext} alt="" height="40" width="40" />
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanted formatting from copied text
            <br />
            for a consistent look.
          </p>
        </ListagemSuperior>
        <ListagemSuperior>
          <img src={preview} alt="" height="40" width="40" />
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard
            <br />
            for easy access.
          </p>
        </ListagemSuperior>
      </Listagem>
      <Marcas>
        <img src={google} alt="" height="50" width="140" />
        <img src={ibm} alt="" height="50" width="140" />
        <img src={microsoft} alt="" height="50" width="140" />
        <img src={hp} alt="" height="50" width="140" />
        <img src={graphics} alt="" height="50" width="140" />
      </Marcas>
    </Container>
  );
}
