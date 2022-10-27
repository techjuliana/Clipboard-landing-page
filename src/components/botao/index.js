import { Container } from "./styled";

export function Botao() {
  return (
    <Container>
      <button className="botao-verde">Download for IOS</button>
      <button className="botao-azul">Download for MAC</button>
    </Container>
  );
}
