import logo from "./../../images/logo.svg";
import { Logo, Container, Fundo } from "./styled";
import fundo from "./../../images/bg-header-desktop.png";

export function Intro() {
  return (
    <Container>
      <Fundo src={fundo} alt="" />
      <Logo src={logo} alt="logotipo c" />
      <h1>A history of everything you copy</h1>
      <p>texto aqui</p>
      <div className="Download">
        <button className="botao-verde">Download for IOS</button>
        <button className="botao-azul">Download for MAC</button>
      </div>
    </Container>
  );
}
